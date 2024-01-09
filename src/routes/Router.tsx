import { createBrowserRouter } from 'react-router-dom';
import {
  Practice1,
  Practice2,
  Practice3,
  Practice4,
  Practice5,
  Practice6,
} from './RoutsConstFile';

export const router = createBrowserRouter([
  {
    path: '/practice1',
    element: <Practice1 />,
  },
  {
    path: '/practice2',
    element: <Practice2 />,
  },
  {
    path: '/practice3',
    element: <Practice3 />,
  },
  {
    path: '/practice4',
    element: <Practice4 />,
  },
  {
    path: '/practice5',
    element: <Practice5 />,
  },
  {
    path: '/practice6',
    element: <Practice6 />,
  },
]);
