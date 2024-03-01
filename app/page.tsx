"use client";

import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
  useConvexAuth,
} from "convex/react";
import { libreFranklin } from "./fonts";
import Navbar from "@/components/app/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  console.log(isAuthenticated);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-1">
      <Navbar />
      <Image
        className="absolute h-full w-full overflow-hidden -z-10 opacity-30 blur-[3px] dark:invert-0 dark:opacity-25"
        src="/bg.jpg"
        width={"1920"}
        height="0"
        alt="background"
      />

      <div
        className={
          "headingDiv text-[2.5rem] text-center flex font-semibold flex-col leading-tight mt-16 " +
          libreFranklin.className
        }
      >
        <span className="">Pioneers of Transparent and Precise</span>
        <span>
          <span className=" text-[#4acdc2]">AI-Driven </span>Automated
          Assessment
        </span>
      </div>

      <div className="border- border-white px-4 py-2 text-center text-[1.07rem] w-[34rem] text-gray-200 opacity-80 ">
        RecruitMe revolutionizes hiring by eliminating biases, ensuring fair
        assessments, and delivering transparent feedback for both companies and
        candidates.
      </div>

      <div className="flex">
        <div></div>
        <Button className="text-[0.96rem] mt-2 py-5">Let's assess</Button>
      </div>
      {/* <SignInButton mode="modal" />
      <div>
        <Authenticated>Logged in</Authenticated>
        <Unauthenticated>Logged out</Unauthenticated>

        <AuthLoading>Still loading</AuthLoading>
      </div> */}
    </main>
  );
}
