import { Button } from '@/components/ui/button';
import React, { Suspense, useState } from 'react';

// do the network on slow 3G and then try pre-fetching it on hover

const HeavyComponent = React.lazy(() => import('./heavy-component'));

const loadComponent = () => {
  import('./heavy-component');
};

const LazyLoading = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="h-full w-full flex justify-center items-center space-x-10">
      <Button onClick={() => setShow(true)}>Show Component </Button>
      <Button className="hover:opacity-30" onMouseOver={loadComponent}>
        Pre fetch it on hover
      </Button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading;
