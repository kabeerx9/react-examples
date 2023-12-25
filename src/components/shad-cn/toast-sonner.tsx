import { toast } from 'sonner';
import { Button } from '../ui/button';

const ToastSonner = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-5 justify-center items-center ">
      <Button onClick={() => toast('This is a toast')}>Open Toast</Button>
      <Button
        onClick={() => {
          const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('done');
              reject();
            }, 1000);
          });

          toast.promise(promise, {
            loading: 'Loading...',
            success: 'Promise Successfully Resolved 🙌',
            error: 'Promise Rejected 😕',
          });
        }}
      >
        Promise Toast
      </Button>
    </div>
  );
};

export default ToastSonner;
