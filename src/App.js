import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route index element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
