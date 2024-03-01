import { lexend } from "@/app/fonts";
import { dark } from "@clerk/themes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function Navbar() {
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

        <div className="h-20 items-center flex">
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
