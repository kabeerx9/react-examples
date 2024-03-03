import { Input } from '@/components/ui/input';
import { InputDetails } from './FormBuilder';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FinalForm = ({
  finalFormFields,
}: {
  finalFormFields: InputDetails[];
}) => {
  return (
    <div className="h-1/2 w-1/2 p-5 border-2 bg-green-200 border-black">
      <form
        onSubmit={() => {
          alert('Hello');
        }}
        className="flex flex-col gap-5"
      >
        {finalFormFields.map((field) => (
          <div key={field.name}>
            {field.type === 'text' && (
              <div className="space-y-2">
                <Label>{field.label}</Label>
                <Input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                />
              </div>
            )}
            {field.type === 'number' && (
              <div className="space-y-2">
                <Label>{field.label}</Label>
                <Input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  min={field.min}
                  max={field.max}
                  placeholder={field.placeholder}
                />
              </div>
            )}
            {field.type === 'checkbox' && (
              <div className="flex gap-2 items-center">
                <Label>{field.label}</Label>
                <input
                  className="h-4 w-4"
                  type={field.type}
                  name={field.name}
                  required={field.required}
                />
              </div>
            )}
            {field.type === 'select' && (
              <div className="flex gap-2 items-center">
                <Label>{field.label}</Label>
                <Select>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        ))}

        {finalFormFields.length > 0 && (
          <Button type="submit" className="w-1/3 ml-auto">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};
export default FinalForm;
