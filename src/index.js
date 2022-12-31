import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Flight from "./pages/Flight/Flight";
import FlightInfo from "./pages/Flight/FlightInfo";
import FlightsList from "./pages/Flight/FlightsList";
import NotFound from "./pages/NotFound";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route path="/" element={<Flight />}>
            <Route path="" element={<FlightsList />} />
            <Route path=":infoSlug" element={<FlightsList />} />
          </Route>
          <Route path="/flight-info" element={<Flight />}>
            <Route path="" element={<NotFound />} />
            <Route path=":infoSlug" element={<FlightInfo />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));