import { ProfileDetailsProps } from "@/types/user";
import { ProfileDetails } from "../Sections/ProfileDetails";
import api from "@/services/api";

export async function GetProfileDetails() {
  const response = await api.get("/user/me");
  const profileDetails: ProfileDetailsProps = response.data;

  return <ProfileDetails profileDetails={profileDetails} />;
}
