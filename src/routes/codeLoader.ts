interface CodeLoader {
  [key: string]: () => Promise<{ default: string }>;
}
const codeLoader: CodeLoader = {
  '/practice1': () => import('@/interview-challenge/Practice1.tsx?raw'),
  '/practice2': () => import('@/interview-challenge/Practice2.tsx?raw'),
  '/practice3': () => import('@/interview-challenge/Practice3.tsx?raw'),
  '/practice4': () => import('@/interview-challenge/Practice4.tsx?raw'),
  '/practice5': () => import('@/interview-challenge/Practice5.tsx?raw'),
  '/practice6': () => import('@/interview-challenge/Practice6.tsx?raw'),
  '/practice7': () => import('@/interview-challenge/Practice7.tsx?raw'),
  '/form-builder': () =>
    import('@/interview-challenge/form-builder/FormBuilder.tsx?raw'),
  '/infinitescroll': () =>
    import('@/interview-challenge/InfiniteScroll.tsx?raw'),
  '/accordian': () => import('@/interview-challenge/Accordian.tsx?raw'),
  '/sticky-notes': () => import('@/interview-challenge/sticky-notes.tsx?raw'),
  '/stop-watch': () => import('@/interview-challenge/StopWatch.tsx?raw'),
  '/temp': () => import('@/components/TimeTableGenerator.tsx?raw'),
  '/image-slider': () => import('@/interview-challenge/ImageSlider.tsx?raw'),
  '/live-chat': () => import('@/interview-challenge/LiveChat.tsx?raw'),
  '/autocomplete-search': () =>
    import('@/interview-challenge/AutoCompleteAndSearch.tsx?raw'),
  '/selectable-grid': () =>
    import('@/interview-challenge/SelectableGrid.tsx?raw'),
  '/effect-learn': () => import('@/learning/effect-learn.tsx?raw'),
  '/error-boundary': () =>
    import('@/learning/error-handling/usingErrorBoundaries.tsx?raw'),
  '/event-bubbling': () => import('@/learning/event-bubbling.tsx?raw'),
  '/localization': () => import('@/learning/localization.tsx?raw'),
};

export default codeLoader;
