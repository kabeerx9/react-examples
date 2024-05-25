import React from 'react';

const App = React.lazy(() => import('@/App'));
const Home = React.lazy(() => import('@/Home'));

// PRACTICE ONES:

const Practice1 = React.lazy(() => import('@/interview-challenge/Practice1'));
const Practice2 = React.lazy(() => import('@/interview-challenge/Practice2'));
const Practice3 = React.lazy(() => import('@/interview-challenge/Practice3'));
const Practice4 = React.lazy(() => import('@/interview-challenge/Practice4'));
const Practice5 = React.lazy(() => import('@/interview-challenge/Practice5'));
const Practice6 = React.lazy(() => import('@/interview-challenge/Practice6'));
const Practice7 = React.lazy(() => import('@/interview-challenge/Practice7'));

// INTERVIEW CHALLENGES:

const Temp = React.lazy(() => import('@/components/TimeTableGenerator'));
const Accordian = React.lazy(() => import('@/interview-challenge/Accordian'));
const FormBuilder = React.lazy(
  () => import('@/interview-challenge/form-builder/FormBuilder'),
);
const ImageSlider = React.lazy(
  () => import('@/interview-challenge/ImageSlider'),
);
const InfiniteScroll = React.lazy(
  () => import('@/interview-challenge/InfiniteScroll'),
);

const StickyNotes = React.lazy(
  () => import('@/interview-challenge/sticky-notes'),
);
const StopWatch = React.lazy(() => import('@/interview-challenge/StopWatch'));

const LiveChat = React.lazy(() => import('@/interview-challenge/LiveChat'));

const AutoCompleteAndSearch = React.lazy(
  () => import('@/interview-challenge/AutoCompleteAndSearch'),
);

const SelectableGrid = React.lazy(
  () => import('@/interview-challenge/SelectableGrid'),
);

// LEARNING TOPICS:

const EffectLearn = React.lazy(() => import('@/learning/effect-learn'));
const ReactErrorBoundary = React.lazy(
  () => import('@/learning/error-handling/usingErrorBoundaries'),
);
const EventBubblingExample = React.lazy(
  () => import('@/learning/event-bubbling'),
);
const Localization = React.lazy(() => import('@/learning/localization'));

export {
  Accordian,
  App,
  EffectLearn,
  EventBubblingExample,
  FormBuilder,
  Home,
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
  LiveChat,
  AutoCompleteAndSearch,
  SelectableGrid,
};
