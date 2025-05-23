import React, { createContext, useState, ReactNode } from 'react';
import { PlanResponse, PlanRequest } from '../types/plan';
import { fetchPlan } from '../api/planService';

interface PlanContextValue {
  plan?: PlanResponse;
  loading: boolean;
  error?: string;
  generatePlan: (objectives: string[]) => Promise<void>;
  regenerateSection: (section: keyof PlanResponse) => Promise<void>;
  sendFeedback: (section: keyof PlanResponse, comment: string) => Promise<void>;
}

export const PlanContext = createContext<PlanContextValue>({
  loading: false,
  generatePlan: async () => {},
  regenerateSection: async () => {},
  sendFeedback: async () => {},
});

export const PlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [plan, setPlan] = useState<PlanResponse>();
  const [objectives, setObjectives] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const generatePlan = async (obj: string[]) => {
    setLoading(true);
    setError(undefined);
    setObjectives(obj);
    try {
      const res = await fetchPlan({ objectives: obj });
      setPlan(res);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const regenerateSection = async (section: keyof PlanResponse) => {
    if (!objectives.length) return;
    setLoading(true);
    setError(undefined);
    try {
      const res = await fetchPlan({ objectives, regenerateSection: section });
      setPlan(prev => prev ? { ...prev, [section]: res[section] } : res);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const sendFeedback = async (section: keyof PlanResponse, comment: string) => {
    if (!objectives.length) return;
    setLoading(true);
    setError(undefined);
    try {
      const res = await fetchPlan({ objectives, feedback: { section, comment } });
      setPlan(res);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PlanContext.Provider value={{ plan, loading, error, generatePlan, regenerateSection, sendFeedback }}>
      {children}
    </PlanContext.Provider>
  );
};
