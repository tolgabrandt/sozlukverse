import { NavLink } from "react-router-dom";
import { LogoShort} from "../../assets/logo/index";

export const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col text-sm">
        <img src={LogoShort} className="mb-4" alt="sozlukverse logo" />
      Üzgünüz, aradığınız sayfa yapım aşamasında.
      <div>
        <NavLink className="text-green-500" to="/">
          Ana sayfaya dön
        </NavLink>
      </div>
    </div>
  );
};
