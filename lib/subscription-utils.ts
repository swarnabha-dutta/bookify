import { PLANS, PlanType } from "@/lib/subscription-constants";

export type ClerkHasFn = ((params: { plan: string }) => boolean) | undefined | null;

export const getPlanFromClerkHas = (has: ClerkHasFn): PlanType => {
  if (has?.({ plan: PLANS.PRO })) return PLANS.PRO;
  if (has?.({ plan: PLANS.STANDARD })) return PLANS.STANDARD;
  return PLANS.FREE;
};
