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
import Footer from "@/components/app/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  console.log(isAuthenticated);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-1">
      <Navbar />
      <Footer />
      <Image
        className="absolute h-full w-full overflow-hidden -z-10 opacity-15 blur-[4px] dark:invert-0 dark:opacity-5"
        src="/bg.png"
        width={"1920"}
        height="0"
        alt="background"
      />

      <div
        className={
          "headingDiv text-[2.5rem] text-center flex font-semibold flex-col leading-tight mt-8 " +
          libreFranklin.className
        }
      >

        <span className="">Pioneers of Transparent Automated</span>
        <span>
          <span className=" text-[#4acdc2]">AI-Driven </span> Recruiting
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
        <Button className="text-[0.96rem] mt-2 py- flex gap-1">
          <span>Let's assess{"  "}</span> <ArrowRight />{" "}
        </Button>
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
