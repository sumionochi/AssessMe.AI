// app/page.tsx
import Interview from "@/components/Interview";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { v } from "convex/values";
import React from "react";

export default async function InterviewPage({ searchParams }: { searchParams: { _id: Id<"assess"> } }) {
  const { _id } = searchParams;
  const getInterviewInfo = useQuery(api.assess.getAssessmentCardById, { _id: _id });

  const interviewInfo = getInterviewInfo

  if (!interviewInfo) {
    return <div>Interview not found</div>;
  }

  return (
    <div>
      <Interview interviewInfo={interviewInfo} />
    </div>
  );
}