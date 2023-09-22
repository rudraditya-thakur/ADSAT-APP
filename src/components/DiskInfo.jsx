import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const DiskInfo = () => {
	const [diskInfo, setDiskInfo] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const apiUrl = "http://127.0.0.1:8000/sys/diskInfo";

		axios
			.get(apiUrl)
			.then((response) => {
				setDiskInfo(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching Disk info:", error);
				setLoading(false);
			});
	}, []);

	const renderDoughnutChart = (used, free) => {
		const data = {
			labels: ["Used", "Free"],
			datasets: [
				{
					data: [used, free],
					backgroundColor: ["#FF5733", "#00FF33"],
				},
			],
		};

		const options = {
			responsive: true,
			cutoutPercentage: 0, // Set cutoutPercentage to 0 to make it a full circle
			legend: {
				display: false,
			},
		};

		return (
			<div className="w-24 h-24">
				{" "}
				{/* Adjust width and height as needed */}
				<Doughnut data={data} options={options} />
			</div>
		);
	};

	return (
		<div className="w-full">
			<p className="text-[#000000] dark:bg-[#2D2D2D] dark:text-white dark:shadow-sm dark:shadow-[#90E0EF] text-[20px] font-semibold leading-[28px] shadow-sm bg-white shadow-[#00B4D8] py-2 px-4 w-fit rounded-md">
				Disk Information
			</p>
			<div className="mt-4 flex flex-wrap -mx-2">
				{loading ? (
					<p>Loading...</p>
				) : (
					<>
						{Object.keys(diskInfo).map((key, index) => {
							if (key.startsWith("Device")) {
								const device = diskInfo[key];
								const used = parseFloat(device["Used"]);
								const free = 100 - used;

								const doughnutData = {
									labels: ["Used", "Free"],
									datasets: [
										{
											data: [used, free],
											backgroundColor: ["#572cf9", "#1f96fa"],
										},
									],
								};

								const doughnutOptions = {
									responsive: true,
									maintainAspectRatio: true, // Set the aspect ratio to 1:1
									cutoutPercentage: 0, // Set cutoutPercentage to 0 to make it a full circle
									legend: {
										display: true,
									},
								};

								return (
									<div key={index} className="w-full mb-4 ">
										<div className="bg-white dark:bg-[#2D2D2D] shadow-md shadow-[#CAF0F8] dark:shadow-sm dark:shadow-[#90E0EF] rounded-lg p-2 flex items-center ">
											<div className="mr-4 w-1/2 mx-auto">
												{/* Left side for disk details */}
												<div className="w-1/2 mx-auto">
													<p className="text-[#000000] dark:text-[#FFF] text-lg font-bold leading-[24px] ">
														{device["Device"]}
													</p>
													<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-md leading-[22px]">
														Mountpoint: {device["Mountpoint"]}
													</p>
													<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-md leading-[22px]">
														File System Type: {device["File system type"]}
													</p>
													<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-md leading-[22px]">
														Total Size: {device["Total Size"]}
													</p>
												</div>
											</div>
											<div>
												{/* Right side for Doughnut chart */}
												<div className="">
													{/* Adjust width and height as needed */}
													<Doughnut
														data={doughnutData}
														options={doughnutOptions}
													/>
												</div>
											</div>
										</div>
									</div>
								);
							}
							return null;
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default DiskInfo;
