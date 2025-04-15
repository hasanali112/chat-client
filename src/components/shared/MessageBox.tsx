import { Plus, Smile, ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "@/redux/hook";
import { useCreateChatMutation } from "@/redux/features/chat/chatApi";

const MessageBox = ({ onSend }: { onSend: () => void }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAppSelector((state) => state.auth as any);
  const { receiverId } = useAppSelector((state) => state.chat);
  const [createChat] = useCreateChatMutation();

  const onsSubmit: SubmitHandler<FieldValues> = async (data) => {
    const messageData = {
      sender: user?.id,
      receiver: receiverId,
      message: data.message,
    };

    await createChat(messageData);
    onSend();

    reset();
  };

  return (
    <div className="flex items-center w-full bg-white/10 backdrop-blur-lg border-t border-gray-700 p-3">
      <button className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none">
        <Plus size={20} />
      </button>

      <form
        className="flex items-center w-full"
        onSubmit={handleSubmit(onsSubmit)}
      >
        <div className="flex-1 mx-2">
          <input
            {...register("message")}
            autoComplete="off"
            className="flex-1 px-4 py-2 text-sm bg-transparent rounded-md focus:outline-none"
            placeholder="Type your message..."
            type="text"
          />
        </div>

        <Button
          className="p-2 text-gray-400  bg-transparent focus:outline-none"
          type="button"
        >
          <Smile size={20} />
        </Button>

        <Button
          className="flex items-center justify-center  min-w-[20px] h-10 rounded-full"
          color="primary"
          size="sm"
          type="submit"
          variant="shadow"
        >
          <ArrowRight size={20} />
        </Button>
      </form>
    </div>
  );
};

export default MessageBox;
