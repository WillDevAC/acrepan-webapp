import { LayoutDashboard } from "@/layout/dashboard";

import { Chips } from "../../../components/Sections/Chips";
import { Breads } from "@/app/components/Sections/Breads";
import { Suspense } from "react";
import { Loading } from "@/app/components/Loading";

export default function BreadsPage() {
  return (
    <LayoutDashboard>
      <div className="flex overflow-x-auto gap-5">
        <Chips activeChip="breads"/>
      </div>
      <Suspense fallback={<Loading/>}>
        <Breads/>
      </Suspense>
    </LayoutDashboard>
  );
}
