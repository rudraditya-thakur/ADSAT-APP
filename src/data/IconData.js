// IconData.js
import DashIcon from "../assets/svg/Dashboard-icon.svg";
import DashIconInactive from "../assets/svg/Dashboard-icon-inactive.svg";
import MarketsIcon from "../assets/svg/Markets-active.svg";
import MarketsIconInactive from "../assets/svg/Markets-inactive.svg";
import TransactionIcon from "../assets/svg/Transaction-active.svg";
import TransactionIconInactive from "../assets/svg/Transaction-icon.svg";
import ActiveProfileIcon from "../assets/svg/ActiveProfile-icon.svg";
import ProfileIcon from "../assets/svg/Profile-icon.svg";
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
