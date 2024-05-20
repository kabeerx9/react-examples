import { App, Home } from './dashboard';

import { createBrowserRouter } from 'react-router-dom';

import {
  practiceRoutes,
  interviewChallengeRoutes,
  learnTopicsRoutes,
} from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      ...practiceRoutes,

      ...interviewChallengeRoutes,

      ...learnTopicsRoutes,
    ],
  },
]);
