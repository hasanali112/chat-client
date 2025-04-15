import { Search, Phone, MoreVertical } from "lucide-react";

import { useAppSelector } from "@/redux/hook";
import { useGetSingleUserQuery } from "@/redux/features/auth/auth.api";

const Navbar = () => {
  const { receiverId: id } = useAppSelector((state) => state.chat);

  const { data: singlePerson } = useGetSingleUserQuery(id, {
    skip: !id,
  });

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-white/10 backdrop-blur-lg fixed top-0 right-0 w-[75%]">
      <div className="flex items-center">
        {singlePerson?.data?.profileImg && (
          <div className="relative mr-3">
            <img
              alt={singlePerson?.data?.fullName}
              className="w-12 h-12 rounded-full object-cover"
              src={singlePerson?.data?.profileImg}
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
        )}

        {singlePerson?.data && (
          <div>
            <h3 className="text-lg font-medium ">
              {singlePerson?.data?.fullName}
            </h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <Search size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <Phone size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
