import { Logo, LogoShort } from "../../assets/logo/";
import { SearchBar } from "../../components";
import { HeaderUser, HeaderGuest } from "../index";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { authRequired } from "../../helpers/";

export function Header() {
  const { state } = useContext(AuthContext);
  return (
    <header className="border-b border-gray-200 border-t-4 border-t-green-500 text-sm px-6 sticky top-0 bg-white z-10">
      <section className="container-base flex h-16 items-center justify-between gap-6">
      
        <div className="shrink-0">
          <NavLink to="/">
            <img src={Logo} alt="Sözlükverse Logo" className="hidden md:block" />
          </NavLink>
          <NavLink to="/">
            <img src={LogoShort} alt="Sözlükverse Logo" className="md:hidden" />
          </NavLink>
        </div>

        <div className="max-w-[550px] flex-auto ">
          <SearchBar status="form form-secondary" />
        </div>

        <div className="flex gap-2 md:gap-4 justify-end w-[200px]">{authRequired(state.isAuthenticated, <HeaderUser />, <HeaderGuest />)} </div>
      </section>

      <section className="container-base pb-2 flex md:hidden">
        <ul className="flex">
          <li>
          <button className="form pl-0" >bugün</button>
          </li>
          <li>
          <button className="form pl-0">tüm zamanlar</button>
          </li>
          <li>
          <button className="form pl-0">debe</button>
          </li>
        </ul>
      </section>
    </header>
  );
}
