import React from "react";
import Table from "../components/Table";
import { rateHistoryData, cardData, BalanceData } from "../data/currencyData";
import TabsRender from "../components/Tabs";
import Button from "../components/Button";
import CurrencyCard from "../components/CurrencyCard";
import BalanceCard from "../components/BalanceCard";
import ChartBar from "../components/ChartBar";
import DonutChart from "../components/Dough";
import ConverterCard from "../components/ConverterCard";
import adminIcon from "../assets/svg/adminIcon.svg";
import DropBtn from "../components/DropBtn";
import CustomDropdown from "../components/CustomDropdown";
import SystemInfo from "../components/SystemInfo1";
import BootTimeInfo from "../components/BootTimeInfo";
import CpuInfo from "../components/Cpuinfo1";
import MemoryInfoChart from "../components/MemInfo";
import DiskInfo from "../components/DiskInfo";
import NetworkUsage from "../components/NetworkUsage";
import NetworkInterfaceTable from "../components/NetworkInterfaceTable";

function Network() {
	return (
		<div className="py-[28px]">
			<div className="flex-wrap min-[1728px]:flex-nowrap flex mt-[27px] gap-[25px]">
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<NetworkUsage />
				</div>
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<NetworkInterfaceTable />
				</div>
			</div>
		</div>
	);
}

export default Network;
