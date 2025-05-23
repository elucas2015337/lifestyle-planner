import { openai } from "./openaiClient";
import type { PlanRequest, PlanResponse } from "../types/plan";

export async function fetchPlan(req: PlanRequest): Promise<PlanResponse> {
  const completion = await openai.chat.completions.create({
   model: "deepseek/deepseek-r1:free",
    messages: [
      {
        role: "system",
        content: ["You are a lifestyle coach that receives the user's JSON profile and goal as input.",
          "When you respond, output only a single JSON object with exactly these top-level keys:",
          `"professional", "workout", "hobby", "nutrition".`,
          "Do NOT wrap in markdown or code fences, do NOT include any extra text or comments, and do NOT mention tools or functions."
        ].join(" ")
      },
      {
        role: "user",
        content: JSON.stringify(req),
      },
    ],
    temperature: 0.7,
  });

  // the new client returns an array under .choices
  return JSON.parse(completion.choices[0].message?.content || "{}");
}
