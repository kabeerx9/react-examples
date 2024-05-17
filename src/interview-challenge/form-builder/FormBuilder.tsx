import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import DialogComponent from './DialogComponent';
import FinalForm from './FinalForm';
import { Button } from '@/components/ui/button';
import FormPreview from './FormPreview';
import { Separator } from '@/components/ui/separator';

const inputTypes = [
  'text',
  'number',
  // 'email',
  // 'password',
  'checkbox',
  'select',
];

export type InputDetails = {
  id: string;
  type: string;
  label?: string;
  name?: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  values?: string[];
  min?: number;
  max?: number;
};

const FormBuilder = () => {
  const [finalFormFields, setFinalFormFields] = useState<InputDetails[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedInputType, setSelectedInputType] = useState('text');

  const handleInputSelection = (inputType: string) => {
    setSelectedInputType(inputType);
    setOpenModal(true);
  };

  useEffect(() => {
    if (localStorage.getItem('finalFormFields')) {
      setFinalFormFields(JSON.parse(localStorage.getItem('finalFormFields')!));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('finalFormFields', JSON.stringify(finalFormFields));
  }, [finalFormFields]);

  return (
    <div className="flex flex-col h-full w-full bg-gray-100">
      <div className="text-center text-5xl font-bold underline">
        Dynamic Form Builder
      </div>
      <div className="w-full h-full flex space-x-5 justify-center items-center  ">
        {/* SECTION - 1  */}

        {/* FORM FIELD TO ADD  */}

        <div className="flex flex-col items-center gap-5  p-5 rounded-lg h-2/3  bg-white">
          <span className="font-semibold ">Choose Input</span>
          <div className="flex flex-col justify-between h-full ">
            {inputTypes.map((inputType) => (
              <Button
                className="flex justify-start"
                key={inputType}
                onClick={() => handleInputSelection(inputType)}
              >
                <PlusIcon />
                <span>{inputType}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* DIALOG TO ENTER THE DETAILS :  */}

        <DialogComponent
          selectedInputType={selectedInputType}
          setFinalFormFields={setFinalFormFields}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />

        {/* SECTION 2 */}

        {/* DISPLAY THE ONGOING FORM  */}

        {/* RENDER THE FINAL FORM HERE  */}

        <div className="flex flex-col items-center h-2/3 w-1/2">
          <span className="font-semibold text-lg pb-2 ">Manage Form</span>
          <FinalForm
            finalFormFields={finalFormFields}
            setFinalFormFields={setFinalFormFields}
          />
        </div>

        <Separator orientation="vertical" className="h-2/3 w-1  bg-black" />

        {/* SECTION - 3 */}

        {/* PREVIEW OF THE FORM  */}
        <div className="flex flex-col items-center h-2/3 w-1/3 pb-2">
          <span className="font-semibold text-lg pb-2 ">Form Preview</span>
          <FormPreview />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
