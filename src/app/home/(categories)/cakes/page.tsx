import { LayoutDashboard } from "@/layout/dashboard";

import { Suspense } from "react";
import { Loading } from "@/app/components/Loading";

import { Chips } from "../../../components/Sections/Chips";
import { Cakes } from "@/app/components/Sections/Cakes";

export default function CakesPage() {
  return (
    <LayoutDashboard>
      <div className="flex overflow-x-auto gap-5">
        <Chips activeChip="cakes"/>
      </div>
      <Suspense fallback={<Loading/>}>
        <Cakes/>
      </Suspense>
    </LayoutDashboard>
  );
}
