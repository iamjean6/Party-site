import { Routes, Route } from "react-router-dom";
import MainLayout from "./ui/mainlayout";

import Home from "./components/home";
import Agenda from "./components/agenda";
import Members from "./components/members";
import Events from "./components/events";
import Gallery from "./components/gallery";
import Contacts from "./components/contacts";
import Contribution from "./components/contribution";
import Registration from "./components/registration";
import President from "./components/president";
import Counter from "./components/counter";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/president" element={<President />} />
        <Route path="/counter" element={<Counter />} />
      </Route>
    </Routes>
  );
};

export default App;
