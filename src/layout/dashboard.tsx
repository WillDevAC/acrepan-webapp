import { Header } from "@/app/components/Header";

interface LayoutDashboardProps {
  children: React.ReactNode;
}

export function LayoutDashboard({ children }: LayoutDashboardProps) {
  return (
    <>
      <Header />
      <div className="px-8">{children}</div>
    </>
  );
}
