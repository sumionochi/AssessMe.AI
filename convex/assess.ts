import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const assess = mutation({
  args: {
    _id: v.string(),
    name: v.string(),
    jobProfile: v.string(),
    jobtype: v.string(),
    companyName: v.string(),
    jobRequirements: v.string(),
    level: v.string(),
    questions: v.array(v.string()),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const assessId = await ctx.db.insert("assess", args);
    return assessId;
  },
});
