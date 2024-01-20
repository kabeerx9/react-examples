// TO CATCH SIMPLE UNDEFINED ERROS , PAGE HAS TO CRASH LIKE , undefined.map , for example , it will catch those directly.

import {
  ErrorBoundary,
  FallbackProps,
  useErrorBoundary,
} from 'react-error-boundary';
import { Button } from '../../components/ui/button';
import { useEffect, useState } from 'react';

const FallBackComponent = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  // reset can be used when api calls want to be reset , that is code me undefined error nahi hai structure ki wajah se

  console.log('Error in fallback component', error);
  return (
    <div className="text-4xl">
      <div>Something went wrong 😭👹</div>
      <div>Error is : {error?.message}</div>
      <Button onClick={() => resetErrorBoundary()}>Refetch Please</Button>
    </div>
  );
};

interface TODO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Component = () => {
  const { showBoundary } = useErrorBoundary();

  const [todos, setTodos] = useState<TODO[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [falseArray] = useState<any>(undefined);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .catch((err) => showBoundary(err))
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="flex flex-col text-4xl justify-center items-center space-y-8">
      <Button onClick={() => showBoundary(new Error('This is a custom error'))}>
        Trigger Error
      </Button>
      <Button onClick={() => setFlag(true)}>
        Undefined Error (Will be caught)
      </Button>
      {flag && <div>{falseArray.map((item: any) => item)}</div>}

      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

const ReactErrorBoundary = () => {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={FallBackComponent}
        onError={(error, info) => {
          console.log(error, info);
        }}
      >
        <Component />
      </ErrorBoundary>
    </>
  );
};

export default ReactErrorBoundary;
