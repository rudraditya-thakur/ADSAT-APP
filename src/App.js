import Sidebar from "./layout/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Network from "./pages/Network";
import DirectoryPage from "./pages/Directory"
import Process from "./pages/Process"
import MalwarePage from "./pages/MalwareDetect";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[15.2rem] bg-[#CAF0F8] dark:bg-[#12131A] px-[34px] min-h-[calc(100vh-98px)]">
          <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/network" element={<Network />} />
              <Route exact path="/directory" element={<DirectoryPage />} />
              <Route exact path="/process" element={<Process />} />
              <Route exact path="/systemfiles" element={<MalwarePage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
