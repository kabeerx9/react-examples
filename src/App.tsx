import { toast } from 'sonner';
import { ConfirmModal } from './components/modals/confirm-modal';
import ToastSonner from './components/shad-cn/toast-sonner';
import { Button } from './components/ui/button';

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <ToastSonner />
      <ConfirmModal
        onConfirm={() => toast.success('Confirm modal working fine ')}
      >
        <Button>Open Alert</Button>
      </ConfirmModal>
    </div>
  );
};

export default App;
