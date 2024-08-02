import { query } from "./_generated/server";
import Tasks from "@/components/todovex/tasks";
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query().collect();
  },
});