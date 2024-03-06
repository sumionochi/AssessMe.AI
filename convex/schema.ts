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
});
