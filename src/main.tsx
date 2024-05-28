import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes/Router.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

import './i18n.ts';
import { Toaster } from './components/ui/toaster.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <div className="h-screen w-screen">
        <RouterProvider router={router} />
      </div>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  </QueryClientProvider>,
);
