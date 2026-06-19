import { auth } from "@clerk/nextjs/server";
import { PLANS, PLAN_LIMITS, PlanType } from "@/lib/subscription-constants";
import { getPlanFromClerkHas } from "@/lib/subscription-utils";

export const getUserPlan = async (): Promise<PlanType> => {
  const { has, userId } = await auth();

  if (!userId) return PLANS.FREE;

  return getPlanFromClerkHas(has);
};

export const getPlanLimits = async () => {
  const plan = await getUserPlan();
  return PLAN_LIMITS[plan];
};
