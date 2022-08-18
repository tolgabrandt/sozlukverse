import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col text-sm">
      Üzgünüz, aradığınız sayfa yapım aşamasında.
      <div>
        <NavLink className="text-green-500" to="/">
          Ana sayfaya dön
        </NavLink>
      </div>
    </div>
  );
};
