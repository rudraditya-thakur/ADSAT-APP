/* eslint-disable no-script-url */
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
import SystemInfo1 from "../components/SystemInfo1";
import SystemInfo2 from "../components/SystemInfo2";
import SystemInfo3 from "../components/SystemInfo3";
import SystemInfo4 from "../components/SystemInfo4";
import BootTimeInfo from "../components/BootTimeInfo";
import CpuInfo1 from "../components/Cpuinfo1";
import CpuInfo2 from "../components/Cpuinfo2";
import MemoryInfoChart from "../components/MemInfo";
import DiskInfo from "../components/DiskInfo";
const buttonContent = (
	<div>
		<DropBtn />
	</div>
);

function Dashboard() {
	return (
		<div className="py-[28px]">
			{/* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-[1620px]:grid-cols-4 gap-[25px]'>
            
            {BalanceData.map((currency) => (
              <BalanceCard key={currency.id} data={currency} />
            ))}
            {cardData.map((currency) => (
				<CurrencyCard key={currency.id} data={currency} />
				))}
			</div> */}
			<div className=" flex-col min-[1728px]:flex-nowrap flex  gap-[15px]">
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
						System Information
					</p>
				</div>
				<div className="grid grid-cols-4 gap-4">
					<SystemInfo1 />
					<SystemInfo2 />
					<SystemInfo3 />
					<SystemInfo4 />
				</div>
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<BootTimeInfo />
				</div>
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
						CPU Information
					</p>
				</div>
				<div className="flex justify-between">
					<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-8/12">
						<CpuInfo1 />
					</div>
					<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] p-4 ml-2  w-fit  flex items-center">
						<CpuInfo2 />
					</div>
				</div>
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<MemoryInfoChart />
				</div>
				<div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto">
					<DiskInfo />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
