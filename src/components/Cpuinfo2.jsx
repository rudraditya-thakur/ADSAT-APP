import React, { useState, useEffect } from "react";
import axios from "axios";

const CpuInfo = () => {
	const [cpuInfo, setCpuInfo] = useState({});
	const [loading, setLoading] = useState(true);

	// Function to fetch CPU info from the server
	const fetchCpuInfo = () => {
		// Define the URL of your FastAPI server's endpoint for CPU information
		const apiUrl = "http://127.0.0.1:8000/sys/cpuInfo";

		axios
			.get(apiUrl)
			.then((response) => {
				// Handle the successful response and set the CPU info
				setCpuInfo(response.data);
				setLoading(false);
			})
			.catch((error) => {
				// Handle any errors that occur during the request
				console.error("Error fetching CPU info:", error);
				setLoading(false);
			});
	};

	useEffect(() => {
		// Fetch CPU info initially when the component mounts
		fetchCpuInfo();

		// Set up an interval to fetch CPU info every 3 seconds
		const intervalId = setInterval(fetchCpuInfo, 3000);

		// Clean up the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			<div className="h-full">
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						<div className="bg-white p-3  rounded-lg border border-gray-200 shadow-md">
							<div className="">
								<p>
									<span className="font-semibold">Physical cores:</span>{" "}
									<span className="font-light">
										{cpuInfo["Physical cores"]}
									</span>
								</p>
								<p>
									<span className="font-semibold">Total cores:</span>{" "}
									<span className="font-light">{cpuInfo["Total cores"]}</span>
								</p>
								<p>
									<span className="font-semibold">Max Frequency:</span>{" "}
									<span className="font-light">{cpuInfo["Max Frequency"]}</span>
								</p>
								<p>
									<span className="font-semibold">Min Frequency:</span>{" "}
									<span className="font-light">{cpuInfo["Min Frequency"]}</span>
								</p>
								<p>
									<span className="font-semibold">Current Frequency:</span>{" "}
									<span className="font-light">
										{cpuInfo["Current Frequency"]}
									</span>
								</p>
								<p>
									<span className="font-semibold">Total CPU Usage:</span>{" "}
									<span className="font-light">
										{cpuInfo["Total CPU Usage"]}
									</span>
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CpuInfo;
