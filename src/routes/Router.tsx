import Home from '@/Home';
import Practice1 from '@/interview-challenge/Practice1';
import Practice2 from '@/interview-challenge/Practice2';
import Practice3 from '@/interview-challenge/Practice3';
import Practice4 from '@/interview-challenge/Practice4';
import Practice5 from '@/interview-challenge/Practice5';
import Practice6 from '@/interview-challenge/Practice6';
import EffectLearn from '@/learning/effect-learn';
import ReactErrorBoundary from '@/learning/error-handling/usingErrorBoundaries';
import EventBubblingExample from '@/learning/event-bubbling';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
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
      // react topic
      {
        path: '/error-boundary',
        element: <ReactErrorBoundary />,
      },
      {
        path: '/event-bubbling',
        element: <EventBubblingExample />,
      },
      {
        path: '/effect-learn',
        element: <EffectLearn />,
      },
    ],
  },
]);
