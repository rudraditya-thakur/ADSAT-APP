import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaDownload, FaUpload } from "react-icons/fa";

const NetworkUsage = () => {
	const [networkData, setNetworkData] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchData = () => {
		const apiUrl = "http://127.0.0.1:8000/net/netusage";

		axios
			.get(apiUrl)
			.then((response) => {
				setNetworkData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching network usage info:", error);
				setLoading(false);
			});
	};

	useEffect(() => {
		// Fetch data initially
		fetchData();

		// Set up an interval to fetch data every 10 seconds
		const intervalId = setInterval(fetchData, 2000);

		// Clean up the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			<div className="flex justify-between items-center">
				<p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
					Network Usage
				</p>
			</div>
			<div className="mt-4">
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						<div className="bg-white dark:bg-[#2D2D2D] shadow-md p-4 rounded-lg mb-4 ">
							<div className="flex">
								<div className="flex flex-col justify-center">
									<FaUpload size={25} className="mr-2" />
								</div>
								<div className="">
									<p className="text-[#000000] dark:text-[#FFF] text-[18px] font-semibold leading-[24px]">
										Upload
									</p>
									<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
										{networkData["Upload"]}
									</p>
								</div>
							</div>
						</div>
						<div className="bg-white dark:bg-[#2D2D2D] shadow-md p-4 rounded-lg mb-4">
							<div className="flex">
								<div className="flex flex-col justify-center">
									<FaDownload size={25} className="mr-2" />
								</div>
								<div className="">
									<p className="text-[#000000] dark:text-[#FFF] text-[18px] font-semibold leading-[24px]">
										Download
									</p>
									<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
										{networkData["Download"]}
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-[#2D2D2D] shadow-md p-4 rounded-lg mb-4">
							<p className="text-[#000000] dark:text-[#FFF] text-[18px] font-semibold leading-[24px]">
								Upload Speed
							</p>
							<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
								{networkData["Upload Speed"]}
							</p>
						</div>
						<div className="bg-white dark:bg-[#2D2D2D] shadow-md p-4 rounded-lg mb-4">
							<p className="text-[#000000] dark:text-[#FFF] text-[18px] font-semibold leading-[24px]">
								Download Speed
							</p>
							<p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
								{networkData["Download Speed"]}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NetworkUsage;
