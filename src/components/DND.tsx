import { useState } from 'react';
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
} from 'react-beautiful-dnd';

// Define the type for your items
interface Items {
	[key: string]: string[];
}

const initialItems: Items = {
	footballers: ['Messi', 'Ronaldo', 'Mbappe', 'Neymar', 'Haaland'],
	animals: ['Dog', 'Cat', 'Horse', 'Lion', 'Tiger'],
	cricket: ['Sachin', 'Virat', 'Dhoni', 'Rohit', 'Rahul'],
};

const Task = () => {
	const [data, setData] = useState<Items>(initialItems);

	const handleDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const { source, destination } = result;

		if (
			source.droppableId === destination.droppableId &&
			source.index === destination.index
		)
			return;
		if (
			source.droppableId === destination.droppableId &&
			source.index !== destination.index
		) {
			const sourceData = [...data[source.droppableId]];
			const [removed] = sourceData.splice(source.index, 1);
			sourceData.splice(destination.index, 0, removed);
			setData({
				...data,
				[source.droppableId]: sourceData,
			});
			return;
		}

		const sourceData = [...data[source.droppableId]]; // Create a copy of the source array
		const destinationData = [...data[destination.droppableId]]; // Create a copy of the destination array

		const [removed] = sourceData.splice(source.index, 1);
		destinationData.splice(destination.index, 0, removed);

		setData({
			...data,
			[source.droppableId]: sourceData,
			[destination.droppableId]: destinationData,
		});
	};

	return (
		<div>
			<DragDropContext onDragEnd={handleDragEnd}>
				<div className="flex gap-5">
					{Object.entries(data).map(([fieldName, fieldData]) => (
						<Droppable key={fieldName} droppableId={fieldName}>
							{(provided) => (
								<div
									className="flex flex-col gap-5 border-4 border-gray-400 rounded-xl p-5"
									{...provided.droppableProps}
									ref={provided.innerRef}>
									{fieldData.map((item, index) => (
										<Draggable key={item} index={index} draggableId={item}>
											{(provided) => (
												<div
													className="w-40 h-20 flex justify-center items-center text-3xl font-semibold bg-white"
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}>
													{item}
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					))}
				</div>
			</DragDropContext>
		</div>
	);
};

export default Task;
