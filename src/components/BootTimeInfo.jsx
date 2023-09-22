import React, { useState, useEffect } from "react";
import axios from "axios";

const BootTimeTable = () => {
	const [bootTime, setBootTime] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Define the URL of your FastAPI server's endpoint for boot information
		const apiUrl = "http://127.0.0.1:8000/sys/bootInfo";

		// Use Axios to make a GET request to the server
		axios
			.get(apiUrl)
			.then((response) => {
				// Handle the successful response and set the boot time
				setBootTime(response.data["Boot Time"]);
				setLoading(false);
			})
			.catch((error) => {
				// Handle any errors that occur during the request
				console.error("Error fetching boot time info:", error);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<div className="flex  items-center ">
				<p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px] w-2/3">
					Boot Time
				</p>
			<div className="w-full ">
				{loading ? (
					<p>Loading...</p>
				) : (
					<div className="bg-gray-100 p-2 rounded-lg w-full flex items-center justify-center">
						<div className="text-md text-center font-medium ">{bootTime}</div>
					</div>
				)}
			</div>
      </div>

		</div>
	);
};

export default BootTimeTable;
