import { NavLink } from "react-router-dom";
import { Header } from "../../layouts";

export const MobileSidebar = () => {
  return (
    <>
      <Header />
      <section className="flex container-base">
        <ul>
          <NavLink to="baslik-1">
            <li className="py-20">başlık 1</li>
          </NavLink>
        </ul>
      </section>
    </>
  );
};
