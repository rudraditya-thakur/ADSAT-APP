import React from "react";

const SideBar = () => {
	return (
		<div>
			<div className="w-1/3 h-screen bg-yellow-600 text-white text-xl font-bold ">
				<div className="p-4">Logo</div>
				<div className=" h-full flex flex-col gap-4 items-center justify-center">
					<div className="">System Monitor</div>
					<div className="">System Monitor</div>
					<div className="">Network Monitor</div>
					<div className="">Directory Structure</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
