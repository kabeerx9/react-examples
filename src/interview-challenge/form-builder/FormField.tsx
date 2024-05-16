import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
import { CrosshairIcon } from 'lucide-react';
import { InputDetails } from './FormBuilder';
import { v4 as uuidv4 } from 'uuid';

interface FormFieldProps {
  field: InputDetails;
  handleDeleteField: (id: string) => void;
}

const FormField = ({ field, handleDeleteField }: FormFieldProps) => {
  // const { attributes, listeners, setNodeRef, transform, transition } =
  //   useSortable({ id: field.id });

  // const style = {
  //   transition,
  //   transform: CSS.Transform.toString(transform),
  // };

  return (
    <>
      <div key={field.name}>
        {field.type === 'text' && (
          <div
            // ref={setNodeRef}
            // {...attributes}
            // {...listeners}
            // style={style}
            className="flex space-y-2 border-2 border-black p-2 rounded-lg"
          >
            <div className="flex-1">
              <Label>{field.label}</Label>
              <Input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
              />
            </div>
            <CrosshairIcon onClick={() => handleDeleteField(field.id)} />
          </div>
        )}
        {field.type === 'number' && (
          <div
            // ref={setNodeRef}
            // {...attributes}
            // {...listeners}
            // style={style}
            className="flex space-y-2 border-2 border-black p-2 rounded-lg"
          >
            <div className="flex-1">
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
            <CrosshairIcon onClick={() => handleDeleteField(field.id)} />
          </div>
        )}
        {field.type === 'checkbox' && (
          <div
            // ref={setNodeRef}
            // {...attributes}
            // {...listeners}
            // style={style}
            className="flex border-2 border-black p-2 rounded-lg"
          >
            <div className="flex-1 gap-2 items-center border-2">
              <Label>{field.label}</Label>
              <input
                className="h-4 w-4"
                type={field.type}
                name={field.name}
                required={field.required}
              />
            </div>
            <CrosshairIcon onClick={() => handleDeleteField(field.id)} />
          </div>
        )}
        {field.type === 'select' && (
          <div
            // ref={setNodeRef}
            // {...attributes}
            // {...listeners}
            // style={style}
            className="flex  border-2 border-black p-2 rounded-lg"
          >
            <div className="flex-1 gap-2 items-center">
              <Label>{field.label}</Label>
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={uuidv4()} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <CrosshairIcon onClick={() => handleDeleteField(field.id)} />
          </div>
        )}
      </div>
    </>
  );
};

export default FormField;
