import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { InputDetails } from './FormBuilder';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const FormField = ({ field }: { field: InputDetails }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: field.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <div key={field.name}>
        {field.type === 'text' && (
          <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="space-y-2 border-2 border-black p-2 rounded-lg"
          >
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
          <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="space-y-2 border-2 border-black p-2 rounded-lg"
          >
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
          <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="flex gap-2 items-center border-2 border-black p-2 rounded-lg"
          >
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
          <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="flex gap-2 items-center border-2 border-black p-2 rounded-lg"
          >
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
    </>
  );
};

export default FormField;
