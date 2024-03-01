import { lexend } from "@/app/fonts";
import { dark } from "@clerk/themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="flex h-[4.5rem] w-full bg-[#28736d] items-center justify-between  fixed  top-0 px-3 py-2">
      <div className={"text-2xl self font-bold " + lexend.className}>
        RecruitMe
      </div>
      <div className="flex justify-center items-center px-8 h-[3.7rem] rounded-md  gap-8 bg-[#256963]">
        <Button className="bg-[#256963] text-white hover:bg-[#194240]">
          AI Interview
        </Button>
        <Button className="bg-[#256963] text-white hover:bg-[#194240]">
          Feedback & Analytics
        </Button>
        <Button className="bg-[#256963] text-white hover:bg-[#194240]">
          Analytics
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#256963] hover:bg-[#1c4a47] p-0 mr-1 border-0"
              size="icon"
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-20  items-center flex">
          <UserButton
            showName={false}
            appearance={{
              baseTheme: dark,
            }}
          />
        </div>
      </div>
    </div>
  );
}
