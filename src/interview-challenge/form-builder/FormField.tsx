import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { XCircle } from 'lucide-react';
import { InputDetails } from './FormBuilder';

interface FormFieldProps {
  field: InputDetails;
  handleDeleteField: (id: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, handleDeleteField }) => {
  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'number':
        return (
          <Input
            type={field.type}
            name={field.name}
            required={field.required}
            placeholder={
              field.type === 'number' ? 'Enter a number' : field.placeholder
            }
            min={field.type === 'number' ? field.min : undefined}
            max={field.type === 'number' ? field.max : undefined}
          />
        );
      case 'checkbox':
        return (
          <input
            className="h-4 w-4"
            type={field.type}
            name={field.name}
            required={field.required}
          />
        );
      case 'select':
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex space-y-2 border-2 border-black p-5 rounded-lg">
      <div className="flex-1">
        <Label>{field.label}</Label>
        {renderField()}
      </div>
      <XCircle
        onClick={() => handleDeleteField(field.id)}
        className="cursor-pointer hover:opacity-80 hover:text-red-800"
      />
    </div>
  );
};

export default FormField;
