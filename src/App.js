import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CardBasicPage from "./pages/CardBasicPage/CardBasicPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/card-basic' element={<CardBasicPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
