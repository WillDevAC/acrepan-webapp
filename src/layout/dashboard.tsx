import { Header } from "@/app/components/Header";
import { Menu } from "@/app/components/Menu";

interface LayoutDashboardProps {
  children: React.ReactNode;
}

export function LayoutDashboard({ children }: LayoutDashboardProps) {
  return (
    <>
      <Header type="default" />
      <div className="px-4">{children}</div>
      <Menu />
    </>
  );
}
