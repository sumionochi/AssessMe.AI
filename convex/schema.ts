import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  assess: defineTable({
    name: v.string(),
    jobProfile: v.string(),
    jobtype: v.string(),
    companyName: v.string(),
    jobRequirements: v.string(),
    level: v.string(),
    questions: v.array(v.string()),
    userId: v.string(),
  }).index("by_user", ["userId"]),

  feedback: defineTable({
    name: v.string(),
    jobProfile: v.string(),
    companyName: v.string(),
    jobtype: v.string(),
    jobRequirements: v.string(),
    level: v.string(),
    questions: v.array(
      v.object({
        question: v.string(),
        answer: v.string(),
        isAI: v.optional(v.boolean()),
        strengths: v.array(
          v.object({
            feedbackHeading: v.string(),
            feedback: v.string(),
          })
        ),
        improvements: v.array(
          v.object({
            feedbackHeading: v.string(),
            feedback: v.string(),
          })
        ),
      })
    ),
    overview: v.string(),
    analytics: v.array(
      v.object({
        parameter: v.string(),
        points: v.number(),
        maxPoints: v.number(),
      })
    ),
    userId: v.string(),
  }).index("by_user", ["userId"]),
});
