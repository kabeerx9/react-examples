import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from './components/ui/sonner.tsx';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/Router.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
    <Toaster richColors />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
