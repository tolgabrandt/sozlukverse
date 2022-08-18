import { SelectBox } from "../../components/forms/select-box/select-box";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  const items = [{ name: "tüm zamanlar" }, { name: "bugün" }, { name: "debe" }, { name: "nft" }, { name: "kripto" }, { name: "off-topic" }];
  return (
    <section className="w-[260px] items-center md:flex-col md:flex hidden sticky top-[102px] h-[calc(100vh_-_102px)] scrollbar mt-8 text-sm">
      <SelectBox items={items} />
      <div className="mt-4">
        <ul className="w-[240px]">
          <li>
            <NavLink
              to="/entry/1"
              className="break-word grid grid-cols-[1fr_minmax(min-content,_40px)] items-center gap-1  hover:bg-gray-50 hover:rounded-md p-2"
            >
              create react app<span className="text-gray-400 text-center">14</span>
            </NavLink>
          </li>

        </ul>
      </div>
    </section>
  );
};
