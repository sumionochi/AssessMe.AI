"use client";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";

export default function TestingPage() {
  const assessMentCreator = useMutation(api.assessmentCreator.createAssessment);

  const [name, setName] = useState("");
  const [jobProfile, setJobProfile] = useState("");
  const [jobType, setJobType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [level, setLevel] = useState("");
  const [userId, setUserId] = useState("");

  const questions = ["hi?", "hello?"];
  //created at
  // updated at

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-1">
      <div>
        Assessment creator
        <div>
          <span>Enter name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <span>Enter Jobprofile</span>
          <input
            value={jobProfile}
            onChange={(event) => setJobProfile(event.target.value)}
          />
        </div>
        <div>
          <span>Enter jobtype</span>
          <input
            value={jobType}
            onChange={(event) => setJobType(event.target.value)}
          />
        </div>
        <div>
          <span>Enter companyName</span>
          <input
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </div>
        <div>
          <span>Enter jobRequirements</span>
          <input
            value={jobRequirements}
            onChange={(event) => setJobRequirements(event.target.value)}
          />
        </div>
        <div>
          <span>Enter level</span>
          <input
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          />
        </div>
        <div>
          <span>Enter userId</span>
          <input
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() =>
              assessMentCreator({
                jobType,
                jobProfile,
                userId,
                name,
                companyName,
                jobRequirements,
                level,
                questions,
              })
            }
          >
            Submit{" "}
          </button>
        </div>
      </div>
      <div>
         
      </div>
    </div>
  );
}
