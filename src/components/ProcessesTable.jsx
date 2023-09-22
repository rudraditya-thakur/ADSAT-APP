import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import arrow icons from react-icons

const ProcessesTable = () => {
	const [processes, setProcesses] = useState([]);
	const [prevVms, setPrevVms] = useState(0); // State to store the previous vms value
	const [arrowIcons, setArrowIcons] = useState([]); // Array to store arrow icons

	useEffect(() => {
		// Fetch data and update the table
		const fetchData = () => {
			const apiUrl = "http://127.0.0.1:8000/process/Processes";

			axios
				.get(apiUrl)
				.then((response) => {
					// Filter processes where 'username' is not null
					const filteredProcesses = response.data.Processes.filter(
						(process) => process.username !== null
					);

					// Check if vms value increased or decreased compared to the previous value
					const newArrowIcons = filteredProcesses.map((process) => {
						const vmsValue = parseInt(process.vms);
						if (vmsValue > prevVms) {
							return <FaArrowUp className="text-green-500" />;
						} else if (vmsValue < prevVms) {
							return <FaArrowDown className="text-red-500" />;
						} else {
							return ""; // No change, no arrow
						}
					});

					// Update the state variables
					setProcesses(filteredProcesses);
					setArrowIcons(newArrowIcons);
				})
				.catch((error) => {
					console.error("Error fetching process data:", error);
				});
		};

		// Fetch data initially
		fetchData();

		// Set up an interval to fetch data every 2 seconds
		const intervalId = setInterval(fetchData, 2000);

		// Clean up the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, [prevVms]); // Add prevVms as a dependency to run the effect when it changes

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white dark:bg-[#1C1C25] rounded-[15px]">
				<thead>
					<tr>
						<th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#CAF0F8] text-lg  ">
							Username
						</th>
						<th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#CAF0F8] text-lg ">
							PID
						</th>
						<th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#CAF0F8] text-lg ">
							Name
						</th>
						<th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#CAF0F8] text-lg ">
							VMS
						</th>
					</tr>
				</thead>
				<tbody>
					{processes.map((process, index) => (
						<tr key={index} className="text-sm font-medium">
							<td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[10rem] dark:text-white">
								{process.username}
							</td>
							<td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap dark:text-white">
								{process.pid}
							</td>
							<td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[10rem] dark:text-white">
								{process.name}
							</td>
							<td className="flex justify-between  px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap dark:text-white">
								{process.vms}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProcessesTable;
