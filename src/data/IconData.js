// IconData.js
import DashIcon from "../assets/svg/Dashboard-icon.svg";
import DashIconInactive from "../assets/svg/Dashboard-icon-inactive.svg";
import MarketsIcon from "../assets/svg/Markets-active.svg";
import MarketsIconInactive from "../assets/svg/Markets-inactive.svg";
import TransactionIcon from "../assets/svg/Transaction-active.svg";
import TransactionIconInactive from "../assets/svg/Transaction-icon.svg";
import SettingsIcon from "../assets/svg/Settings-icon.svg";
import ActiveSettingsIcon from "../assets/svg/ActiveSettings-icon.svg";
import HelpIcon from "../assets/svg/Help-icon.svg";
import ActiveHelpIcon from "../assets/svg/ActiveHelp-icon.svg";
import ActiveProfileIcon from "../assets/svg/ActiveProfile-icon.svg";
import ProfileIcon from "../assets/svg/Profile-icon.svg";

export const dashboardToSettingsData = [
  {
    id: "System",
    icon: DashIcon,
    inactiveIcon: DashIconInactive,
    link: "/",
    text: "System",
  },
  {
    id: "network",
    icon: MarketsIcon,
    inactiveIcon: MarketsIconInactive,
    link: "./network",
    text: "Network",
  },
  {
    id: "Directory",
    icon: TransactionIcon,
    inactiveIcon: TransactionIconInactive,
    link: "./directory",
    text: "Directory",
  },
  {
    id: "process",
    icon: ActiveProfileIcon,
    inactiveIcon: ProfileIcon,
    link: "./process",
    text: "Process",
  },
];

export const helpData = [
  {
    id: "help",
    icon: ActiveHelpIcon,
    inactiveIcon: HelpIcon,
    link: "./help",
    text: "Help",
  },
];
