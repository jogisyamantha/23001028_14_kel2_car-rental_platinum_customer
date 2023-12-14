import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ticket from "../src/pages/Ticket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/tiket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
