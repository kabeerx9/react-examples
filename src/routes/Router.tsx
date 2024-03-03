import App from '@/App';
import Home from '@/Home';
import FormBuilder from '@/interview-challenge/form-builder/FormBuilder';
import InfiniteScroll from '@/interview-challenge/InfiniteScroll';
import Practice1 from '@/interview-challenge/Practice1';
import Practice2 from '@/interview-challenge/Practice2';
import Practice3 from '@/interview-challenge/Practice3';
import Practice4 from '@/interview-challenge/Practice4';
import Practice5 from '@/interview-challenge/Practice5';
import Practice6 from '@/interview-challenge/Practice6';
import Practice7 from '@/interview-challenge/Practice7';
import EffectLearn from '@/learning/effect-learn';
import ReactErrorBoundary from '@/learning/error-handling/usingErrorBoundaries';
import EventBubblingExample from '@/learning/event-bubbling';
import Localization from '@/learning/localization';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <App />,
      },
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
      {
        path: '/practice7',
        element: <Practice7 />,
      },
      {
        path: '/form-builder',
        element: <FormBuilder />,
      },
      {
        path: '/infinitescroll',
        element: <InfiniteScroll />,
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
      {
        path: '/localization',
        element: <Localization />,
      },
    ],
  },
]);
