import { Header } from "../../layouts";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../layouts/sidebar/sidebar";

export function Home() {

  return (
    <>
      <Header />
      <main className="flex container-base">
        <Sidebar />

        <section className="z-0 flex-1">
          <Outlet />
        </section>
      </main>
    </>
  );
}
