export interface PlanRequest {
  objectives: string[];
  regenerateSection?: keyof PlanResponse;    // e.g. "professional"
  feedback?: { section: keyof PlanResponse; comment: string };
}
export interface PlanResponse {
  professional: string;
  workout: string;
  hobby: string;
  nutrition: string;
}
