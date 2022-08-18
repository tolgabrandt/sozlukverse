import { Button } from "../../components";
import { PersonBoundingBox, ChatRight, ThreeDots } from "react-bootstrap-icons";
import { Menu } from "@headlessui/react";
import { handleLogout } from "../../helpers/auth/handle-logout";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context"

export function HeaderUser() {
  const {dispatch} = useContext(AuthContext);

  const handleSubmit = () => {
    handleLogout(dispatch);
  }

  return (
    <>
      <Button status="form-sm form-secondary" label={<PersonBoundingBox />} />
      <Button status="form-sm form-secondary" label={<ChatRight />} />

      <div className="relative">
        <Menu>
          <Menu.Button className="form-sm form-secondary">
            <ThreeDots />
          </Menu.Button>
          <Menu.Items>
            <div className="absolute w-[180px] right-0 mt-4 bg-gray-50 border border-gray-100 rounded-md p-4 ">
              <ul>
                <li>
                  <button onClick={handleSubmit}>Çıkış Yap</button>
                </li>
              </ul>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}
