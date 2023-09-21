import Sidebar from "./layout/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Network from "./pages/Network";
import Transactions from "./pages/Process";
import DirectoryPage from "./pages/Directory"
import Profile from "./pages/Directory";
import Setting from "./pages/Setting";
import Help from "./pages/Help";
import Process from "./pages/Process"

function App() {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[19.2rem] bg-[#F0F8FF] dark:bg-[#12131A] px-[34px] min-h-[calc(100vh-98px)]">
          <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/network" element={<Network />} />
              <Route exact path="/directory" element={<DirectoryPage />} />
              <Route exact path="/process" element={<Process />} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/help" element={<Help />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
