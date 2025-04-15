import { useState, useEffect, useRef } from "react";
import MessageBox from "@/components/shared/MessageBox";
import { useGetChatBetweenUsersQuery } from "@/redux/features/chat/chatApi";
import { useAppSelector } from "@/redux/hook";

interface Message {
  _id: string;
  sender: string;
  receiver: string;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ChatData {
  success: boolean;
  message: string;
  data: Message[];
}

const Home = () => {
  const { user } = useAppSelector((state) => state.auth as any);
  const { receiverId } = useAppSelector((state) => state.chat);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const payloadId = {
    senderId: user?.id,
    receiverId: receiverId,
  };

  const { data, isLoading } = useGetChatBetweenUsersQuery(payloadId, {
    skip: !receiverId, // Skip the query if receiverId is null
  });

  const chatData = data as ChatData | undefined;

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  // Format timestamp to readable time
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);

    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-screen pt-20">
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading messages...</p>
          </div>
        ) : chatData?.data?.length ? (
          <div className="space-y-3">
            {chatData.data.map((msg) => (
              <div
                key={msg._id}
                className={`flex ${msg.sender === user?.id ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                    msg.sender === user?.id
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p>{msg.message}</p>
                  <p
                    className={`text-xs mt-1 ${msg.sender === user?.id ? "text-blue-100" : "text-gray-500"}`}
                  >
                    {formatTime(msg.createdAt)}
                    {!msg.read && msg.sender === user?.id && (
                      <span className="ml-2">✓</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500">
            <p>No messages yet. Start a conversation!</p>
          </div>
        )}
      </div>

      {/* Message input */}
      <div>
        <MessageBox onSend={scrollToBottom} />
      </div>
    </div>
  );
};

export default Home;
