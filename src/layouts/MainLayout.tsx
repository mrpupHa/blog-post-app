import Navbar from "../components/common/Navbar/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="px-[60px] py-[48px]">{children}</main>
    </div>
  );
}

export default MainLayout;
