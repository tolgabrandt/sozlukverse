import { Button } from "../../components";
import { PersonBoundingBox, ChatRight, ThreeDots } from "react-bootstrap-icons";
import { Menu } from "@headlessui/react";

export function HeaderUser() {
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
            <div className="absolute right-0 mt-4 bg-gray-50 border border-gray-100 rounded-md p-4 ">Dropdown Menu</div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}
