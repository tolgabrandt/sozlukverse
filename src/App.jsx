import { Routes, Route } from "react-router-dom";
import { EntryMix } from "./features/entrys/entry-mix";
import { SingleEntry } from "./features/entrys/single-entry";
import { Home } from "./pages";
import { MobileSidebar } from "./pages/home/mobile-sidebar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<EntryMix />}></Route>
        <Route path=":entryId" element={<SingleEntry />}></Route>
      </Route>

      <Route path="basliklar" element={<MobileSidebar />}></Route>
    </Routes>
  );
};
export default App;
