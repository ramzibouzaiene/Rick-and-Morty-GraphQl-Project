import "./App.css";
import CharactersList from "./pages/CharactersList/Characters";
import { Route, Routes } from "react-router";
import Character from "./pages/CharacterDetails/Character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
