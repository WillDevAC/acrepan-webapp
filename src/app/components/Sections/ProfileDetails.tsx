"use client";

import { ProfileDetailsProps } from "@/types/user";
import { formatDate } from "@/utils/functions";
import { useEffect } from "react";

import Cookies from "js-cookie";

interface ProfileDetailsPropsComponent {
  profileDetails: ProfileDetailsProps;
}

export function ProfileDetails({
  profileDetails,
}: ProfileDetailsPropsComponent) {
  useEffect(() => {
    Cookies.set("auth-data", JSON.stringify(profileDetails));
  }, []);

  return (
    <>
      <div className="p-5 flex items-center justify-between w-full">
        <section className="flex items-center justify-between">
          <div className="flex items-center  gap-3">
            <img
              src="/avatar.png"
              alt="Profile Picture"
              className="max-w-16 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">{profileDetails.name}</p>
              <span className="text-sm text-gray-600">
                {profileDetails.plan && profileDetails.isPayedPlan && (
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-200 p-2 text-orange-400 flex items-center justify-center h-7 rounded-md">
                      Plano {profileDetails.plan.title}
                    </div>
                    <div className="bg-gray-200 p-2 text-gray-400 flex items-center justify-center h-7 rounded-md">
                      Até {formatDate(profileDetails.expiratePlan)}
                    </div>
                  </div>
                )}
                {!profileDetails.plan && "Você não está em nenhum clube"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
