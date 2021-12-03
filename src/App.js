import Allmeetup from "./pages/allmeetup";
import Favourite from "./pages/favourite.js";
import Newmeetup from "./pages/newmeetup.js";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<Allmeetup />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/new" element={<Newmeetup />} />
      </Routes>
      
      </Layout>
  );
}
export default App;
