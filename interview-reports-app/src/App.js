import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router";
import  { CandidateDetails } from "./pages/CandidateDetails/CandidateDetails";
import { Reports } from "./pages/Reports/Reports";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route
          path={"/candidate/:id"}
          element={
            <CandidateDetails
              openModal={openModal}
              setOpenModal={setOpenModal} />
          }
        />
        <Route
          path={"/reports"}
          element={
            <Reports 
            openModal={openModal} 
            setOpenModal={setOpenModal} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
