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
const dummyData = [
  {
    type: 'text',
    placeholder: 'Please enter your name',
    required: true,
    label: 'Name',
    min: 1,
    max: 10,
  },
  {
    type: 'number',
    placeholder: 'Please Enter marks',
    required: false,
    label: 'Marks',
    min: 10,
    max: 100,
  },
  {
    type: 'checkbox',
    name: 'Please Enter marks',
    required: true,
    label: 'Is this a good student ? ',
    min: 10,
    max: 100,
  },
  {
    type: 'select',
    name: 'Please Enter marks',
    required: true,
    label: 'Favourite food ? ',
    min: 10,
    max: 100,
    options: ['Ice-cream', 'Pastry', 'Chicken', 'Broccoli'],
  },
];

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

      <FinalForm finalFormFields={finalFormFields} />
    </div>
  );
};

export default FormBuilder;
