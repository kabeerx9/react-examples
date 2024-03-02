import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const inputTypes = [
  'text',
  'number',
  // 'email',
  // 'password',
  'checkbox',
  'select',
];

interface InputDetails {
  type: string;
  label?: string;
  name: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  values?: string[];
  min?: number;
  max?: number;
}

const FormBuilder = () => {
  const [finalFormFields, setFinalFormFields] = useState<InputDetails[]>([]);

  console.log('finalFormFields', finalFormFields);

  const [openModal, setOpenModal] = useState(false);
  const [selectedInputType, setSelectedInputType] = useState('text');

  const handleInputSelection = (inputType: string) => {
    setSelectedInputType(inputType);
    setOpenModal(true);
  };

  return (
    <div className="w-full h-full flex flex-col space-y-5 justify-center items-center bg-gray-600 ">
      {/* FIELDS SELECTION WILL TAKE PLACE HERE  */}
      <div className="space-y-5 bg-purple-200">
        {inputTypes.map((inputType) => (
          <div
            className=" bg-green-200 flex p-2 rounded-lg shadow-lg cursor-pointer  "
            key={inputType}
            onClick={() => handleInputSelection(inputType)}
          >
            <PlusIcon />
            <span>{inputType}</span>
          </div>
        ))}
      </div>

      <div>
        <div>This is the Form builder </div>
      </div>

      {/* DIALOG TO ENTER THE DETAILS :  */}

      <DialogComponent
        selectedInputType={selectedInputType}
        setFinalFormFields={setFinalFormFields}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {/* RENDER THE FINAL FORM HERE  */}

      <FinalForm />
    </div>
  );
};

export default FormBuilder;

const FinalForm = () => {
  return (
    <div className="h-1/2 w-1/2 border-2 bg-green-200 border-black">
      This is the final form{' '}
    </div>
  );
};

const DialogComponent = ({
  openModal,
  setFinalFormFields,
  setOpenModal,
  selectedInputType,
}: {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  selectedInputType: string;
  setFinalFormFields: (finalFormFields: InputDetails[]) => void;
}) => {
  const [inputDetails, setInputDetails] = useState<InputDetails>({
    type: selectedInputType,
    name: '',
    required: false,
  });

  const dialogContent = () => {
    if (selectedInputType === 'text') {
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Text Details </DialogTitle>
            <DialogDescription className="flex flex-col space-y-5">
              {/* LABEL & Placeholder */}
              <Label>Enter Label for input </Label>
              <Input
                name="label"
                placeholder="Enter Label"
                value={inputDetails?.label}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    label: e.target.value,
                  }))
                }
              />

              <Label>Enter placeholder for input </Label>
              <Input
                name="placeholder"
                placeholder="Enter placeholder"
                value={inputDetails?.placeholder}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />

              {/* VALIDATIONS  */}
              <div>
                <Label className="mr-2">Is this a required field?</Label>
                <input
                  type="checkbox"
                  name="required"
                  onChange={(e) =>
                    setInputDetails((prev) => ({
                      ...prev,
                      required: e.target.checked,
                    }))
                  }
                />
              </div>

              <Label>Enter the min and max length</Label>

              <Input
                type="number"
                name="min"
                placeholder="Min"
                value={inputDetails?.min}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    min: +e.target.value,
                  }))
                }
              />

              <Input
                type="number"
                name="max"
                placeholder="Max"
                value={inputDetails?.max}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    max: +e.target.value,
                  }))
                }
              />

              <Button
                className="w-1/2"
                onClick={() => {
                  setFinalFormFields((prev) => {
                    return [...prev, inputDetails];
                  });
                  setOpenModal(false);
                }}
              >
                Submit
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      );
    }

    if (selectedInputType === 'number') {
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      );
    }

    if (selectedInputType === 'checkbox') {
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      );
    }

    if (selectedInputType === 'select') {
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      );
    }
    return null;
  };
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      {dialogContent()}
    </Dialog>
  );
};
