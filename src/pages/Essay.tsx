import '@/assets/styles/github-markdown.css';
import 'react-circular-progressbar/dist/styles.css';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Markdown from 'react-markdown';

import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  GRADE_OPTIONS,
  SAMPLE_AI_PROBABILITIES,
  SAMPLE_ESSAY,
  SAMPLE_FEEDBACK,
  SAMPLE_GRADE,
  SAMPLE_INSTRUCTION,
  SAMPLE_RUBRIC,
} from '@/lib/constants';

const Essay = () => {
  const feedbackRef = useRef<HTMLDivElement>(null);

  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsTop(scrollTop === 0);
      setIsBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: (feedbackRef.current?.getBoundingClientRect().top ?? 0) - 100,
        behavior: 'smooth',
      });
    }
  };
  return (
    <MainLayout>
      <div className="fixed bottom-5 right-5">
        {(isTop || isBottom) && (
          <Button
            className="h-12 w-12 rounded-full sm:hidden"
            size="icon"
            onClick={scrollToPosition}
          >
            {!isTop ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
          </Button>
        )}
      </div>
      <section className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-20 px-4 md:grid-cols-2 md:gap-10">
        <form
          action="/api/essay"
          method="POST"
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <Label htmlFor="grade">Grade</Label>
            <Select name="grade" defaultValue={SAMPLE_GRADE.toString()}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                {GRADE_OPTIONS.map((grade) => (
                  <SelectItem key={grade.value} value={grade.value.toString()}>
                    {grade.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="student-instruction">Student Instruction</Label>
            <Textarea
              name="student-instruction"
              placeholder="Enter assignment description here..."
              defaultValue={SAMPLE_INSTRUCTION}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rubric">Rubric</Label>
            <Textarea
              name="rubric"
              placeholder="Enter grading rubric here..."
              rows={5}
              defaultValue={SAMPLE_RUBRIC}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="essay">Essay</Label>
            <Textarea
              name="essay"
              placeholder="Enter student essay here..."
              rows={15}
              defaultValue={SAMPLE_ESSAY}
            />
          </div>
          <Button className="self-start md:self-end">Submit</Button>
        </form>
        <div ref={feedbackRef} className="space-y-10">
          <div className="flex items-center justify-around">
            {SAMPLE_AI_PROBABILITIES.map(({ label, value, color }) => (
              <div
                className="flex flex-1 flex-col items-center gap-2"
                key={label}
              >
                <div className="h-24 w-24" key={label}>
                  <CircularProgressbarWithChildren
                    value={value}
                    strokeWidth={5}
                    styles={{
                      path: {
                        stroke: color,
                      },
                    }}
                  >
                    <p>{value.toFixed(2)}%</p>
                  </CircularProgressbarWithChildren>
                </div>
                <p className="text-center">{label}</p>
              </div>
            ))}
          </div>
          <Markdown className="markdown-body border border-solid border-border p-4 shadow-lg">
            {SAMPLE_FEEDBACK}
          </Markdown>
        </div>
      </section>
    </MainLayout>
  );
};

export default Essay;
