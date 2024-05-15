import { Button } from '@/components/ui/button';
import { InputDetails } from './FormBuilder';

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import FormField from './FormField';

interface FinalFormProps {
  finalFormFields: InputDetails[];
  setFinalFormFields: React.Dispatch<React.SetStateAction<InputDetails[]>>;
}

const FinalForm = ({ finalFormFields, setFinalFormFields }: FinalFormProps) => {
  const getFieldPosition = (id: number) => {
    return finalFormFields.findIndex((field) => field.id === id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setFinalFormFields((fields) => {
      const oldIndex = getFieldPosition(active.id);
      const newIndex = getFieldPosition(over.id);
      return arrayMove(fields, oldIndex, newIndex);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="h-1/2 w-1/2 p-5 border-2 bg-green-200 border-black">
        <form
          onSubmit={() => {
            alert('Hello');
          }}
          className="flex flex-col gap-5"
        >
          <SortableContext
            items={finalFormFields}
            strategy={verticalListSortingStrategy}
          >
            {finalFormFields.map((field) => (
              <FormField field={field} key={field.id} />
            ))}

            {finalFormFields.length > 0 && (
              <Button type="submit" className="w-1/3 ml-auto">
                Submit
              </Button>
            )}
          </SortableContext>
        </form>
      </div>
    </DndContext>
  );
};
export default FinalForm;
