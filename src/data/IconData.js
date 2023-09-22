// IconData.js
import { GrSystem } from "react-icons/gr";
import {TbNetwork} from "react-icons/tb";
import {GoFileDirectoryFill} from "react-icons/go";
import {FcProcess} from "react-icons/fc"

export const dashboardToSettingsData = [
	{
    id: "System",
    icon: <GrSystem />,
    inactiveIcon: <GrSystem />,
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
];
