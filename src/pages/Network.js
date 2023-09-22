import React from "react";
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
