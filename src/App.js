import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CardBasicPage from "./pages/CardBasicPage/CardBasicPage";
import CardMakingPage from "./pages/CardMakingPage/CardMakingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/card-basic' element={<CardBasicPage/>}/>
        <Route path='/card-making' element={<CardMakingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
