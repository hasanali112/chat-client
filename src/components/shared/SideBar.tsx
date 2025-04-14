import { useState } from "react";
import {
  Search,
  MoreVertical,
  Bell,
  ChevronDown,
  Lock,
  Image,
} from "lucide-react";

const ChatSidebar = () => {
  const [selectedFilter] = useState("All Chats");

  const chats = [
    {
      id: 1,
      name: "Catherine Richardson",
      avatar:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "I'm sorry, I didn't catch that. Could you ple...",
      time: "Just now",
      online: true,
    },
    {
      id: 2,
      name: "Themeforest Group",
      avatar:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "Jeny: That's pretty common. I heard th...",
      time: "10:20 pm",
      online: false,
      isGroup: true,
      isLocked: true,
    },
    {
      id: 3,
      name: "Eva Walker",
      avatar:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "You're kidding! I drive a motorcycle as ...",
      time: "09:36 am",
      online: true,
      unreadCount: 2,
      initials: "EW",
    },
    {
      id: 4,
      name: "Christopher Garcia",
      avatar:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "Photo",
      time: "Yesterday",
      online: true,
      isMedia: true,
    },
    {
      id: 5,
      name: "Christina Turner",
      avatar:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastMessage: "I'm working hard in Maths, Physics an...",
      time: "31/05/20",
      online: true,
      unreadCount: 10,
    },
  ];

  return (
    <div className="w-full sticky top-0 left-0 min-h-screen max-h-screen border border-r border-r-gray-800">
      <div className="flex items-center justify-between px-4 py-[21px] border-b border-gray-900">
        <h1 className="text-xl font-semibold ">Chats</h1>
        <div className="flex items-center">
          <button className="p-1 mr-2 ">
            <Bell size={20} />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <div className="relative w-full max-w-xs">
          <button className="flex items-center px-4 py-2 text-sm  border border-gray-800 rounded-md">
            {selectedFilter}
            <ChevronDown className="ml-2" size={16} />
          </button>
        </div>

        <div className="relative flex-1">
          <input
            className="w-full px-4 py-2 pl-10 text-sm  border border-gray-800 rounded-md focus:outline-none"
            placeholder="Search users"
            type="text"
          />
          <Search
            className="absolute  transform -translate-y-1/2 left-3 top-1/2"
            size={16}
          />
        </div>
      </div>

      <div className="overflow-y-auto max-h-96">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center p-3 cursor-pointer  border-b border-gray-700"
          >
            <div className="relative mr-3">
              {chat.initials ? (
                <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full">
                  {chat.initials}
                </div>
              ) : chat.isGroup ? (
                <div className="flex items-center justify-center w-10 h-10 text-white bg-green-500 rounded-full">
                  <div className="flex items-center">
                    <div className="p-1">
                      <svg
                        fill="none"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  alt={chat.name}
                  className="w-10 h-10 rounded-full object-cover"
                  src={chat.avatar}
                />
              )}

              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium  truncate">{chat.name}</h4>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>

              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-200 truncate mr-2">
                  {chat.isMedia && (
                    <Image className="inline-block mr-1" size={14} />
                  )}
                  {chat.lastMessage}
                </p>

                <div className="flex items-center ml-auto">
                  {chat.isLocked && (
                    <Lock className="text-gray-400" size={14} />
                  )}
                  {chat.unreadCount && (
                    <span className="flex items-center justify-center w-6 h-6 ml-2 text-xs text-white bg-blue-500 rounded-full">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
