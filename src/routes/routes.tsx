import {
  Accordian,
  EffectLearn,
  EventBubblingExample,
  FormBuilder,
  ImageSlider,
  InfiniteScroll,
  Localization,
  Practice1,
  Practice2,
  Practice3,
  Practice4,
  Practice5,
  Practice6,
  Practice7,
  ReactErrorBoundary,
  StickyNotes,
  StopWatch,
  Temp,
} from './dashboard';

interface SingleRoute {
  path: string;
  element: JSX.Element;
  name: string;
}

const practiceRoutes: SingleRoute[] = [
  {
    path: '/practice1',
    element: <Practice1 />,
    name: 'Practice 1',
  },
  {
    path: '/practice2',
    element: <Practice2 />,
    name: 'Practice 2',
  },
  {
    path: '/practice3',
    element: <Practice3 />,
    name: 'Practice 3',
  },
  {
    path: '/practice4',
    element: <Practice4 />,
    name: 'Practice 4',
  },
  {
    path: '/practice5',
    element: <Practice5 />,
    name: 'Practice 5',
  },
  {
    path: '/practice6',
    element: <Practice6 />,
    name: 'Practice 6',
  },
  {
    path: '/practice7',
    element: <Practice7 />,
    name: 'Practice 7',
  },
];

const interviewChallengeRoutes: SingleRoute[] = [
  {
    path: '/form-builder',
    element: <FormBuilder />,
    name: 'Form Builder',
  },
  {
    path: '/infinitescroll',
    element: <InfiniteScroll />,
    name: 'Infinite Scroll',
  },
  {
    path: '/accordian',
    element: <Accordian />,
    name: 'Accordian',
  },
  {
    path: '/sticky-notes',
    element: <StickyNotes />,
    name: 'Sticky Notes',
  },
  {
    path: '/stop-watch',
    element: <StopWatch />,
    name: 'Stop Watch',
  },
  {
    path: '/temp',
    element: <Temp />,
    name: 'Temp',
  },
  {
    path: '/image-slider',
    element: <ImageSlider />,
    name: 'Image Slider',
  },
];

const learnTopicsRoutes: SingleRoute[] = [
  {
    path: '/error-boundary',
    element: <ReactErrorBoundary />,
    name: 'Error Boundary',
  },
  {
    path: '/event-bubbling',
    element: <EventBubblingExample />,
    name: 'Event Bubbling',
  },
  {
    path: '/effect-learn',
    element: <EffectLearn />,
    name: 'Effect Learn',
  },
  {
    path: '/localization',
    element: <Localization />,
    name: 'Localization',
  },
];

export { interviewChallengeRoutes, learnTopicsRoutes, practiceRoutes };
