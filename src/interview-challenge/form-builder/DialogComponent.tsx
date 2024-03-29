import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

// TODO -> Correct ts-expect-error

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

  useEffect(() => {
    setInputDetails((prev) => ({
      ...prev,
      type: selectedInputType,
    }));
  }, [selectedInputType]);

  console.log('inputDetails', inputDetails);
  const [optionValue, setOptionValue] = useState<string>('');

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

              <Label>Enter name for input </Label>
              <Input
                name="name"
                placeholder="Enter name"
                value={inputDetails?.name}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
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
                    placeholder: e.target.value,
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
                  //@ts-expect-error don't know the reason
                  setFinalFormFields((prev) => [...prev, inputDetails]);
                  setInputDetails({
                    type: selectedInputType,
                    name: '',
                    required: false,
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
            <DialogTitle>Enter number field details</DialogTitle>
            <DialogDescription className="flex flex-col space-y-5">
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

              <Label>Enter name for input </Label>
              <Input
                name="name"
                placeholder="Enter name"
                value={inputDetails?.name}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
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
                    placeholder: e.target.value,
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

              <Label>Enter the min and max value</Label>

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
                  //@ts-expect-error don't know the reason
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

    if (selectedInputType === 'checkbox') {
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter the checkbox details</DialogTitle>
            <DialogDescription className="flex flex-col space-y-5">
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

              <Label>Enter name for input </Label>
              <Input
                name="name"
                placeholder="Enter name"
                value={inputDetails?.name}
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

              <Button
                className="w-1/2"
                onClick={() => {
                  //@ts-expect-error don't know the reason
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

    if (selectedInputType === 'select') {
      return (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter the details about select component</DialogTitle>
            <DialogDescription className="flex flex-col space-y-5">
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

              <Label>Enter name for input </Label>
              <Input
                name="name"
                placeholder="Enter name"
                value={inputDetails?.name}
                onChange={(e) =>
                  setInputDetails((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />

              <Label>Enter options for select component</Label>
              <div className="flex items-center gap-2">
                <Input
                  className="w-1/2"
                  name="options"
                  placeholder="Enter option to add"
                  value={optionValue}
                  onChange={(e) => setOptionValue(e.target.value)}
                />
                <PlusIcon
                  size={34}
                  className="cursor-pointer border-2 border-black rounded-full shadow-lg"
                  onClick={() => {
                    setInputDetails((prev) => ({
                      ...prev,
                      options: [...(prev.options || []), optionValue],
                    }));
                    setOptionValue('');
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {inputDetails?.options?.map((option) => (
                  <div
                    key={option}
                    className="bg-gray-200 text-black rounded-lg p-2 "
                  >
                    {option}
                  </div>
                ))}
              </div>

              <Button
                className="w-1/2"
                onClick={() => {
                  //@ts-expect-error don't know the reason
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
    return null;
  };
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      {dialogContent()}
    </Dialog>
  );
};

export default DialogComponent;
