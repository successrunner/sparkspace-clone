import clsx from 'clsx';
import { Clipboard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import { GRADE_OPTIONS, SAMPLE_ESSAY, SUBJECT_OPTIONS } from '@/lib/constants';

const TestEssayForm = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<'grade' | 'subject' | 'essay'>('grade');
  const [grade, setGrade] = useState('');
  const [essay, setEssay] = useState('');
  const [subject, setSubject] = useState('');

  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    setCanSubmit(grade !== '' && subject !== '' && essay !== '');
  }, [grade, subject, essay]);

  return (
    <form
      action="/api/essay"
      method="POST"
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/essay');
      }}
    >
      <Label className="text-xl">Pick Student's Grade & Subject</Label>
      <div className="flex gap-4">
        <Select
          name="grade"
          value={grade}
          onValueChange={(value) => {
            setGrade(value);
            setStep('subject');
          }}
        >
          <SelectTrigger
            className={step === 'grade' && !grade ? 'button-flicker' : ''}
          >
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
        <Select
          name="subject"
          value={subject}
          disabled={!grade}
          onValueChange={(value) => {
            setSubject(value);
            setStep('essay');
          }}
        >
          <SelectTrigger
            className={step === 'subject' && !subject ? 'button-flicker' : ''}
          >
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            {SUBJECT_OPTIONS.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between">
        <Label className="text-xl">Student Essay</Label>
        <Clipboard
          className={clsx(
            'mr-1 h-5 w-5 cursor-pointer text-primary',
            step === 'essay' ? 'button-flicker' : ''
          )}
          onClick={() => {
            setEssay(SAMPLE_ESSAY);
          }}
        />
      </div>
      <Textarea
        rows={10}
        name="essay"
        placeholder="Paste student's essay here"
        value={essay}
        disabled={!subject}
        onChange={(e) => {
          setEssay(e.target.value);
        }}
        className={step === 'essay' && !essay ? 'button-flicker' : ''}
      />
      <Button type="submit" disabled={!canSubmit}>
        Grade Essay
      </Button>
    </form>
  );
};

export default TestEssayForm;
