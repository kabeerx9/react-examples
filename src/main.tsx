import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from './components/ui/sonner.tsx';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/Router.tsx';
import { Provider } from 'react-redux';
import { store } from './store/todo-store/todoStore.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <div className="h-screen w-screen">
        <RouterProvider router={router} />
      </div>
      <Toaster richColors />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  </QueryClientProvider>,
);
