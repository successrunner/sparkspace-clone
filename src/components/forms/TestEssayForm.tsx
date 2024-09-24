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
import { GRADE_OPTIONS, SUBJECT_OPTIONS } from '@/lib/constants';

const TestEssayForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <Label className="text-xl">Pick Student's Grade & Subject</Label>
      <div className="flex gap-4">
        <Select>
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
        <Select>
          <SelectTrigger>
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
      <Label className="text-xl">Student Essay</Label>
      <Textarea rows={10} placeholder="Paste student's essay here" />
      <Button>Grade Essay</Button>
    </div>
  );
};

export default TestEssayForm;
