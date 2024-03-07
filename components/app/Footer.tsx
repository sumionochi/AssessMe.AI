import { lexend } from "@/app/fonts";
import { dark } from "@clerk/themes";

import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { GithubIcon, TwitterIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex h-12 w-full bg-[#28736d] items-center justify-between  absolute  bottom-0 px-4 py-2">
      <div className={" self "}>© 2023 RecruitMe</div>
      <div className="flex justify-center items-center rounded-md  gap-8 ">
        <div className="items-center gap-6 flex">
          <GithubIcon />
          <TwitterIcon />
          <Mail />
        </div>
      </div>
    </div>
  );
}