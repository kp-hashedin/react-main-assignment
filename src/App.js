import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav";
import Card from "./components/Superhero/Card";
import Profile from "./components/Superhero/Profile";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="profile/:profile_id" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
