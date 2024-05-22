import { UserIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SingleChatMessage {
  id: string;
  body: string;
  time?: string;
}

const LiveChat = () => {
  const [liveChatMessages, setLiveChatMessages] = useState<SingleChatMessage[]>(
    [],
  );

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const fetchChatMessages = async () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=5&_start=${randomNumber}`,
    );
    const chatData = await response.json();
    setLiveChatMessages((prev) => [
      ...prev.slice(-15),
      ...chatData.map((message: SingleChatMessage) => ({
        id: uuidv4(),
        body: message.body,
        time: new Date().toLocaleTimeString(),
      })),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // fetch the new messages every 2 seconds
      fetchChatMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // to scroll to the bottom of the container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [liveChatMessages]);

  return (
    <div className="w-full h-full flex justify-center items-center bg-black ">
      <div className="w-1/2 h-full bg-gray-300 relative">
        <div className="absolute inset-0 ">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BCJnqijZpEE?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-1/2 h-1/2  rounded-lg p-2 bg-gray-200">
        <div ref={chatContainerRef} className="h-full overflow-y-auto">
          {liveChatMessages?.map((message) => (
            <div
              key={message.id}
              className="p-2 w-full flex justify-between bg-white border-2 border-black rounded-lg my-2"
            >
              <div className="flex">
                <UserIcon className="w-6 h-6" />
                <div>{message.body.slice(0, 30)}</div>
              </div>
              <div className="font-semibold">At : {message.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
