import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";
import { v } from "convex/values";

export const assess = mutation({
  args: {
    name: v.string(),
    jobProfile: v.string(),
    jobtype: v.string(),
    companyName: v.string(),
    jobRequirements: v.string(),
    level: v.string(),
    questions: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not Authenticated");
    }
    const userId = identity.subject;

    const assess = await ctx.db.insert("assess", {
      name: args.name,
      jobProfile: args.jobProfile,
      jobtype: args.jobtype,
      companyName: args.companyName,
      jobRequirements: args.jobRequirements,
      level: args.level,
      questions: args.questions,
      userId,
    });
    return assess;
  },
});
