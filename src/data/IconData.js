// IconData.js
import { GrSystem } from "react-icons/gr";
import {TbNetwork} from "react-icons/tb";
import {GoFileDirectoryFill} from "react-icons/go";
import {FcProcess} from "react-icons/fc"
import {AiFillFolderOpen} from "react-icons/ai"
export const dashboardToSettingsData = [
	{
    id: "System",
    icon: <GrSystem className="text-white" />,
    inactiveIcon: <GrSystem className="text-white" />,
    link: "/",
    text: "System",
  },
  {
    id: "network",
    icon: <TbNetwork />,
    inactiveIcon: <TbNetwork />,
    link: "./network",
    text: "Network",
  },
  {
    id: "Directory",
    icon: <GoFileDirectoryFill />,
    inactiveIcon: <GoFileDirectoryFill />,
    link: "./directory",
    text: "Directory",
  },
  {
    id: "Process",
    icon: <FcProcess />,
    inactiveIcon: <FcProcess />,
    link: "./process",
    text: "Process",
  },
  {
    id: "systemfiles",
    icon: <AiFillFolderOpen />,
    inactiveIcon: <AiFillFolderOpen />,
    link: "./systemfiles",
    text: "System Files",
  },
];
