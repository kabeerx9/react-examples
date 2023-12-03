import InfiniteScroll from "./components/InfiniteScroll";

const App = () => {
	return (
		<>
			<div className="w-screen h-screen flex justify-center items-center bg-gray-300">
				{/* <DND /> */}
				<InfiniteScroll />
			</div>
		</>
	);
};

export default App;
