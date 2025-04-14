import { Plus, Smile, ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";

const MessageBox = () => {
  return (
    <div className="flex items-center w-full bg-white/10 backdrop-blur-lg border-t border-gray-700 p-3">
      <button className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none">
        <Plus size={20} />
      </button>

      <div className="flex-1 mx-2">
        <input
          className="w-full p-2  bg-transparent focus:outline-none"
          placeholder="Type your message here..."
          type="text"
        />
      </div>

      <Button className="p-2 text-gray-400  bg-transparent focus:outline-none">
        <Smile size={20} />
      </Button>

      <Button
        className="flex items-center justify-center  min-w-[20px] h-10 rounded-full"
        color="primary"
        size="sm"
        variant="shadow"
      >
        <ArrowRight size={20} />
      </Button>
    </div>
  );
};

export default MessageBox;
