import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import codeLoader from '@/routes/codeLoader';
import { CheckCircle, CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeDialog = () => {
  const { toast } = useToast();

  const { pathname } = useLocation();

  const getCodeString = async () => {
    try {
      const module = await (
        codeLoader[pathname] as () => Promise<{ default: string }>
      )();
      setCodeString(module.default);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCodeString();
  }, []);

  const [codeString, setCodeString] = useState('');

  const [codeCopied, setCodeCopied] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader className="w-full h-full overflow-auto">
          <DialogTitle className="mt-5">
            <div className="flex justify-between items-center  rounded-lg py-2">
              <span className="font-semibold text-md">Component Code</span>

              {codeCopied ? (
                <Button
                  className="inline-flex justify-between items-center gap-2"
                  disabled={true}
                >
                  <CheckCircle size={20} /> Copied
                </Button>
              ) : (
                <Button
                  className="inline-flex justify-between items-center gap-2"
                  onClick={() => {
                    navigator.clipboard.writeText(codeString);
                    toast({
                      title: 'Code copied to clipboard',
                    });
                    setCodeCopied(true);
                    setTimeout(() => {
                      setCodeCopied(false);
                    }, 3000);
                  }}
                >
                  <CopyIcon size={20} /> Copy
                </Button>
              )}
            </div>
          </DialogTitle>
          <DialogDescription className="w-full h-96 overflow-auto">
            <SyntaxHighlighter
              language="typescript"
              style={atomOneDark}
              wrapLongLines={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CodeDialog;
