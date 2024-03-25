import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookXIcon, Edit, PinIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const StickyNotes = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [notes, setNotes] = useState(initialNotes);

  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempTitle, setTempTitle] = useState('');
  const [tempDescription, setTempDescription] = useState('');

  const handleEditClick = (
    noteId: string,
    noteTitle: string,
    noteDescription: string,
  ) => {
    setEditingNoteId(noteId);
    setTempTitle(noteTitle);
    setTempDescription(noteDescription);
  };

  const handleBlur = () => {
    if (editingNoteId) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNoteId
            ? { ...note, title: tempTitle, description: tempDescription }
            : note,
        ),
      );
      setEditingNoteId(null);
      setTempTitle('');
      setTempDescription('');
    }
  };

  const handleDelete = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handlePinClick = (id: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note,
      ),
    );
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const selectedNote = notes.find((note) => note.id === e.target.id);

    if (selectedNote && selectedNote.isPinned) {
      toast('Cannot drag pinned notes');
      return;
    }

    dragItem.current = e.target?.id;
  };

  const dragEnter = (e: any) => {
    dragOverItem.current = e.currentTarget.id;
  };

  const drop = () => {
    const dragItemIndex = notes.findIndex(
      (note) => note.id === dragItem.current!,
    );
    const dragOverItemIndex = notes.findIndex(
      (note) => note.id === dragOverItem.current!,
    );

    const dragOverNote = notes[dragOverItemIndex];
    if (dragOverNote.isPinned) {
      toast('Cannot drag over pinned notes');
      return;
    }

    const updatedNotes = [...notes];
    const temp = updatedNotes[dragItemIndex];

    // remove the drag item from it's place and insert it before the item it was dragged over
    updatedNotes.splice(dragItemIndex, 1);
    updatedNotes.splice(dragOverItemIndex, 0, temp);

    setNotes(updatedNotes);
  };

  useEffect(() => {
    if (editingNoteId) {
      const titleInput = titleInputRef.current;
      if (titleInput) {
        titleInput.focus();
        titleInput.setSelectionRange(0, 0); // Set cursor at the start
      }
    }
  }, [editingNoteId]);

  return (
    <div className="relative h-full w-full bg-gray-200">
      <div className="text-3xl font-semibold text-center h-12">
        Sticky notes component with drag and drop ( No libraries used )
      </div>
      <div className="flex justify-center items-center">
        <Button
          onClick={() => {
            setOpenAddNoteModal(true);
          }}
        >
          Add +
        </Button>
      </div>
      <div className="grid grid-cols-2">
        {notes.map((note, index) => (
          <div
            draggable
            id={note.id.toString()}
            onDragStart={dragStart}
            onDragEnter={dragEnter}
            onDragEnd={drop}
            key={index}
            className={cn(
              'bg-white p-2 m-2 rounded-md shadow-md',
              note.isPinned && 'border-2 border-red-500',
            )}
          >
            <div className="flex justify-between">
              {editingNoteId === note.id ? (
                <div className="flex gap-2  w-full">
                  <div className="flex-1">
                    <Input
                      autoFocus
                      ref={titleInputRef}
                      className="w-full"
                      value={tempTitle}
                      onChange={(e) => setTempTitle(e.target.value)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleBlur();
                        }
                      }}
                    />
                    <Input
                      value={tempDescription}
                      onChange={(e) => setTempDescription(e.target.value)}
                      onBlur={handleBlur}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleBlur();
                        }
                      }}
                    />
                  </div>
                  <BookXIcon
                    className="cursor-pointer"
                    onClick={() => {
                      setEditingNoteId(null);
                      setTempTitle('');
                      setTempDescription('');
                    }}
                  />
                </div>
              ) : (
                <>
                  <div
                    className="text-lg font-semibold cursor-pointer"
                    onClick={() => {
                      handleEditClick(note.id, note.title, note.description);
                    }}
                  >
                    {note.title}
                  </div>
                  <div className="flex gap-2">
                    <PinIcon
                      className={cn(
                        'cursor-pointer',
                        note.isPinned && 'text-red-500',
                      )}
                      onClick={() => {
                        handlePinClick(note.id);
                      }}
                    />
                    <Edit
                      className="cursor-pointer"
                      onClick={() => {
                        handleEditClick(note.id, note.title, note.description);
                      }}
                    />
                    <BookXIcon
                      className="cursor-pointer"
                      onClick={() => {
                        handleDelete(note.id);
                      }}
                    />
                  </div>
                </>
              )}
            </div>
            {editingNoteId !== note.id && (
              <div className="text-sm">{note.description}</div>
            )}
          </div>
        ))}
      </div>
      {/* THIS IS A MODAL TO ADD NOTES */}
      <AddNoteDialog
        openAddNoteModal={openAddNoteModal}
        setOpenAddNoteModal={setOpenAddNoteModal}
        setNotes={setNotes}
      />
    </div>
  );
};

export default StickyNotes;

import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { initialNotes } from '@/data/tempData';

const AddNoteDialog = ({
  openAddNoteModal,
  setOpenAddNoteModal,
  setNotes,
}: {
  openAddNoteModal: boolean;
  setOpenAddNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPinned, setIsPinned] = useState(false);

  return (
    <Dialog open={openAddNoteModal} onOpenChange={setOpenAddNoteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You can add a new note here</DialogTitle>
          <DialogDescription className="flex flex-col gap-5">
            <Input
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Checkbox
              checked={isPinned}
              onCheckedChange={(checked) => {
                console.log('Checkbox cheked is ', checked);
                setIsPinned(!!checked);
              }}
            />
            <Button
              onClick={() => {
                const uniqueId = uuidv4();
                setNotes((prevNotes) => [
                  ...prevNotes,
                  {
                    id: uniqueId,
                    title,
                    description,
                    isPinned,
                  },
                ]);
                setOpenAddNoteModal(false);

                // Reset the input fields
                setTitle('');
                setDescription('');
                setIsPinned(false);
              }}
            >
              Add Note
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
