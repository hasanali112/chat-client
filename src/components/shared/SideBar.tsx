/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import {
  Search,
  MoreVertical,
  Bell,
  ChevronDown,
  Lock,
  Image,
} from "lucide-react";

import { useGetAllUserQuery } from "@/redux/features/auth/auth.api";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addReceiverId } from "@/redux/features/chat/chatSlice";

export interface IUser {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  profileImg: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ChatSidebar = () => {
  const [selectedFilter] = useState("All Chats");
  const { data: allUsers } = useGetAllUserQuery({});
  const { user } = useAppSelector((state) => state.auth as any);
  const dispatch = useAppDispatch();

  const filterUsers = allUsers?.data?.filter(
    (userId: IUser) => userId._id !== user?.id
  );

  return (
    <div className="w-full sticky top-0 left-0 min-h-screen max-h-screen border border-r border-r-gray-800">
      <div className="flex items-center justify-between px-4 py-[21px] border-b border-gray-900">
        <h1 className="text-xl font-semibold ">Find And Start Chats</h1>
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
        {filterUsers?.map((user: IUser) => (
          <div
            key={user._id}
            className="flex  p-3 cursor-pointer gap-2  border-b border-gray-700"
            onClick={() => dispatch(addReceiverId(user._id))}
          >
            <div className="relative">
              <img
                alt={user.fullName}
                className="w-12 h-12 rounded-full object-cover"
                src={user.profileImg}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="mt-2">
              <h1>{user.fullName}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
