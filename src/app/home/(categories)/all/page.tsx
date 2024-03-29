import { LayoutDashboard } from "@/layout/dashboard";
import { Highlighted } from "@/app/components/Sections/Highlighteds";

import { Chips } from "../../../components/Sections/Chips";
import { Suspense } from "react";

import { Loading } from "@/app/components/Loading";

export default function DashboardPage() {
  return (
    <LayoutDashboard>
      <div className="flex overflow-x-auto gap-5">
        <Chips activeChip="principal"/>
      </div>
      <Suspense fallback={<Loading/>}>
        <Highlighted />
      </Suspense>
    </LayoutDashboard>
  );
}
