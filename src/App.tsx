import Temp from './components/Temp';
import InfiniteScroll from './components/InfiniteScroll';

const App = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gray-200">
        {/* <DND /> */}
        <InfiniteScroll />
        {/* <Temp /> */}
      </div>
    </>
  );
};

export default App;
