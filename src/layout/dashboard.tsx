import { Header } from "@/app/components/Header";
import { Menu } from "@/app/components/Menu";

interface LayoutDashboardProps {
  children: React.ReactNode;
}

export function LayoutDashboard({ children }: LayoutDashboardProps) {
  return (
    <>
      <Header />
      <div className="px-8">{children}</div>
      <Menu/>
    </>
  );
}