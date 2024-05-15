import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import DialogComponent from './DialogComponent';
import FinalForm from './FinalForm';

const inputTypes = [
  'text',
  'number',
  // 'email',
  // 'password',
  'checkbox',
  'select',
];

export type InputDetails = {
  id: number;
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
  // const [finalFormFields, setFinalFormFields] = useState<InputDetails[]>([]);
  const [finalFormFields, setFinalFormFields] = useState<InputDetails[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedInputType, setSelectedInputType] = useState('text');

  const handleInputSelection = (inputType: string) => {
    setSelectedInputType(inputType);
    setOpenModal(true);
  };

  return (
    <div className="w-full h-full flex flex-col space-y-5 justify-center items-center bg-gray-300 ">
      <div className="text-4xl">
        <div>Dynamic Form Builder</div>
      </div>

      {/* FIELDS SELECTION WILL TAKE PLACE HERE  */}
      <div className=" w-full flex justify-around py-5  bg-gray-600">
        {inputTypes.map((inputType) => (
          <div
            className=" bg-black text-white flex p-2 rounded-lg shadow-lg cursor-pointer  "
            key={inputType}
            onClick={() => handleInputSelection(inputType)}
          >
            <PlusIcon />
            <span>{inputType}</span>
          </div>
        ))}
      </div>

      {/* DIALOG TO ENTER THE DETAILS :  */}

      <DialogComponent
        selectedInputType={selectedInputType}
        setFinalFormFields={setFinalFormFields}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {/* RENDER THE FINAL FORM HERE  */}

      <FinalForm
        finalFormFields={finalFormFields}
        setFinalFormFields={setFinalFormFields}
      />
    </div>
  );
};

export default FormBuilder;
