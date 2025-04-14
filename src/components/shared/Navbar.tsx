import { Search, Phone, MoreVertical } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-white/10 backdrop-blur-lg fixed top-0 right-0 w-[75%]">
      <div className="flex items-center">
        <div className="relative mr-3">
          <img
            alt="Catherine Richardson"
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        </div>

        <div>
          <h3 className="text-lg font-medium ">Catherine Richardson</h3>
          <p className="text-sm text-green-500">Online</p>
        </div>
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
