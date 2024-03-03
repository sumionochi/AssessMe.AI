import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createAssessment = mutation({
  args: {
    name: v.string(),
    jobProfile: v.string(),
    jobType: v.string(),
    companyName: v.string(),
    jobRequirements: v.string(),
    level: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const assessMentId = await ctx.db.insert("assessments", {
      name: args.name,
      jobProfile: args.jobProfile,
      jobType: args.jobType,
      companyName: args.companyName,
      jobRequirements: args.jobRequirements,
      level: args.level,
      userId: args.userId,
      createdDate: Date.now()
    });
    console.log(assessMentId);
    return assessMentId;
  },
});
