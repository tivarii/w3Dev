"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map((task,idx)=><p key = {idx}>{JSON.stringify(task)}</p>)}
    </main>
  );
}
