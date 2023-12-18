import ReactErrorBoundary from './components/error-handling/usingErrorBoundaries';

const App = () => {
  return (
    <>
      <div className="h-screen w-screen bg-gray-200">
        <ReactErrorBoundary />
      </div>
    </>
  );
};

export default App;
