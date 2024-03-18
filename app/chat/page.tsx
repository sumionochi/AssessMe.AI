"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { SiChatbot, } from "react-icons/si";
import { MessageSquareIcon } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function ChatArea() {
  const { isSignedIn, user, isLoaded } = useUser();
  const NAME = user?.firstName;

  const messages = useQuery(api.messages.list);
  const sendMessage = useMutation(api.messages.send);
  const [newMessageText, setNewMessageText] = useState("");
  useEffect(() => {
    // Make sure scrollTo works on button click in Chrome
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 0);
  }, [messages]);
  const Submit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendTheMessage();
    }
  };

  const sendTheMessage = async () => {
    await sendMessage({ body: newMessageText, author: user?.firstName! });
    setNewMessageText("");
  };
  return (
    <div className="fixed bottom-0 right-12   mb-16 ">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="p-4">
            <MessageSquareIcon className=" text-2xl text-[#ffffff]" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[23rem] overflow-x-hidden mr-12 px-0 py-0 rounded-2xl bg-[#221041] border-0">
          <div className="flex overflow-x-hidden h-[31rem] w-[23rem] flex-col items-center  bg-[#221041] rounded-xl">
            <div className=" h-full flex overflow-x-hidden flex-col gap-2 overflow-y-auto py-8 px-3 w-full">
              {messages?.map((message: any) => {
                return (
                  <div
                    key={message._id}
                    className={`w-max max-w-[18rem] rounded-md px-4 py-3 h-min ${
                      message.author !== NAME
                        ? "self-start  bg-gray-300 text-gray-800"
                          : "self-end  bg-[#8357d0]  text-gray-50 text-right"
                    } `}
                  >
                    <div className="text-sm font-bold mb-1 text-left">
                      {message.author}
                    </div>
                    {message.body}
                  </div>
                );
              })}
            </div>
            <div className="relative  w-[80%] bottom-4 flex justify-center">
              <textarea
                value={newMessageText}
                onChange={(event) => setNewMessageText(event.target.value)}
                className="w-[85%] h-10 px-3 rounded-l-md py-2 resize-none overflow-y-auto text-black bg-gray-400 rouded"
                onKeyDown={Submit}
              />
              <button
                onClick={sendTheMessage}
                className=" bg-[#7a43da] rounded-r-md  text-white px-4 py-2  "
              >
                send
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
