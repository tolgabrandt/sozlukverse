import { PersonBoundingBox, ChatRight, ThreeDots } from "react-bootstrap-icons";
import { Menu } from "@headlessui/react";
import { handleLogout } from "../../helpers/auth/handle-logout";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { NavLink } from "react-router-dom";

export function HeaderUser() {
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = () => {
    handleLogout(dispatch);
  };

  return (
    <>
      <NavLink to="profile" className="form-sm form-secondary flex items-center">
        <PersonBoundingBox />
      </NavLink>
      <NavLink to="messages" className="form-sm form-secondary flex items-center">
        <ChatRight />
      </NavLink>

      <div className="relative">
        <Menu>
          <Menu.Button className="form-sm form-secondary">
            <ThreeDots />
          </Menu.Button>
          <Menu.Items>
            <div className="absolute w-[180px] right-0 mt-4 bg-gray-50 border border-gray-100 rounded-md ">
              <ul className="py-2">
                <li className="hover:bg-gray-100">
                  <NavLink className="block px-4 py-2 w-full" to="profil">
                    Profil
                  </NavLink>
                </li>

                <li className="hover:bg-gray-100">
                  <NavLink className="block px-4 py-2 w-full" to="cuzdan">
                    Cüzdan
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100">
                  <NavLink className="block px-4 py-2 w-full" to="engellenen">
                    Engellenen
                  </NavLink>
                </li>

                <li className="hover:bg-gray-100">
                  <NavLink className="block px-4 py-2 w-full" to="cop">
                    Çöp
                  </NavLink>
                </li>
                <li className="hover:bg-gray-100 border-t border-gray-200 my-2 "></li>
                <li className=" hover:bg-gray-100">
                  <button className="px-4 py-2 w-full flex" onClick={handleSubmit}>
                    Çıkış Yap
                  </button>
                </li>
              </ul>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}
