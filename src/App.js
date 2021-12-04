import Allmeetup from "./pages/allmeetup";
import Favourite from "./pages/favourite.js";
import NewMeetUp from "./pages/newmeetup.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<Allmeetup />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/new" element={<NewMeetUp />} />
      </Routes>
      
      </Layout>
  );
}
export default App;
