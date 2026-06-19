"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { PLANS, PLAN_LIMITS } from "@/lib/subscription-constants";
import { getPlanFromClerkHas } from "@/lib/subscription-utils";

export const useSubscription = () => {
  const { has, isLoaded: isAuthLoaded } = useAuth();
  const { isLoaded: isUserLoaded } = useUser();

  const isLoaded = isAuthLoaded && isUserLoaded;

  if (!isLoaded) {
    return {
      plan: PLANS.FREE,
      limits: PLAN_LIMITS[PLANS.FREE],
      isLoaded: false,
    };
  }

  const plan = getPlanFromClerkHas(has);

  return {
    plan,
    limits: PLAN_LIMITS[plan],
    isLoaded: true,
  };
};
