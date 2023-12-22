import { LayoutDashboard } from "@/layout/dashboard";

import { BestSellers } from "@/app/components/bestSellers";
import { Chips } from "../../../components/Chips";

export default function DashboardPage() {
  return (
    <LayoutDashboard>
      <div className="flex overflow-x-auto gap-5">
        <Chips />
      </div>
      <BestSellers />
    </LayoutDashboard>
  );
}
