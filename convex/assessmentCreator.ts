import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createAssessment = mutation({
  args: {
    name: v.string(),
    jobProfile: v.string(),
    jobType: v.string(),
    companyName: v.string(),
    jobRequirements: v.string(),
    questions: v.array(v.string()),
    level: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const assessMentId = await ctx.db.insert("assess", {
      name: args.name,
      jobProfile: args.jobProfile,
      jobtype: args.jobType,
      companyName: args.companyName,
      jobRequirements: args.jobRequirements,
      questions: args.questions,
      level: args.level,
      userId: args.userId,
      // createdDate: Date.now(),
    });
    console.log(args.questions);
    return assessMentId;
  },
});



