import { InputDetails } from './FormBuilder';

// import {
//   DndContext,
//   KeyboardSensor,
//   PointerSensor,
//   TouchSensor,
//   closestCorners,
//   useSensor,
//   useSensors,
// } from '@dnd-kit/core';
// import {
//   SortableContext,
//   arrayMove,
//   sortableKeyboardCoordinates,
//   verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
import FormField from './FormField';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface FinalFormProps {
  finalFormFields: InputDetails[];
  setFinalFormFields: React.Dispatch<React.SetStateAction<InputDetails[]>>;
}

const FinalForm = ({ finalFormFields, setFinalFormFields }: FinalFormProps) => {
  // const getFieldPosition = (id: number) => {
  //   return finalFormFields.findIndex((field) => field.id === id);
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleDragEnd = (event: any) => {
  //   const { active, over } = event;
  //   if (active.id === over.id) return;

  //   setFinalFormFields((fields) => {
  //     const oldIndex = getFieldPosition(active.id);
  //     const newIndex = getFieldPosition(over.id);
  //     return arrayMove(fields, oldIndex, newIndex);
  //   });
  // };

  // const sensors = useSensors(
  //   useSensor(PointerSensor),
  //   useSensor(TouchSensor),
  //   useSensor(KeyboardSensor, {
  //     coordinateGetter: sortableKeyboardCoordinates,
  //   }),
  // );

  const handleDeleteField = (id: string) => {
    setFinalFormFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    // <DndContext
    //   sensors={sensors}
    //   collisionDetection={closestCorners}
    //   onDragEnd={handleDragEnd}
    // >
    <Card className="w-full h-full p-5 border-2 bg-white border-black">
      <CardHeader>
        You can drag and drop to change the order of the form items you added.
      </CardHeader>
      <CardContent className="space-y-3">
        {/* <SortableContext
            items={finalFormFields}
            strategy={verticalListSortingStrategy}
          > */}
        {finalFormFields.map((field) => (
          <FormField
            field={field}
            key={field.id}
            handleDeleteField={handleDeleteField}
          />
        ))}
        {/* </SortableContext> */}
      </CardContent>
    </Card>
    // </DndContext>
  );
};
export default FinalForm;
