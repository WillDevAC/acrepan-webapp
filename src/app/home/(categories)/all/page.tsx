import { LayoutDashboard } from "@/layout/dashboard";

import { Highlighted } from "@/app/components/Highlighteds";
import { BestSellers } from "@/app/components/bestSellers";

import { Chips } from "../../../components/Chips";

export default function DashboardPage() {
  return (
    <LayoutDashboard>
      <div className="flex overflow-x-auto gap-5">
        <Chips />
      </div>
      <Highlighted />
      <BestSellers />
    </LayoutDashboard>
  );
}
