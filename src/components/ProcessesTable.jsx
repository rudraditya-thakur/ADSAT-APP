import React, { useEffect, useState } from "react";
import axios from "axios";

const ProcessesTable = () => {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    const apiUrl = "http://127.0.0.1:8000/process/Processes";

    axios
      .get(apiUrl)
      .then((response) => {
        // Filter processes where 'username' is not null
        const filteredProcesses = response.data.Processes.filter(
          (process) => process.username !== null
        );
        setProcesses(filteredProcesses);
      })
      .catch((error) => {
        console.error("Error fetching process data:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-[#1C1C25] rounded-[15px]">
        <thead>
          <tr>
            <th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#9CA3AF] text-sm sm:text-base">
              Username
            </th>
            <th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#9CA3AF] text-sm sm:text-base">
              PID
            </th>
            <th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#9CA3AF] text-sm sm:text-base">
              Name
            </th>
            <th className="text-left px-2 py-2 sm:px-4 sm:py-3 text-[#5E6E78] dark:text-[#9CA3AF] text-sm sm:text-base">
              VMS
            </th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, index) => (
            <tr key={index}>
              <td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[10rem]">
                {process.username}
              </td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
                {process.pid}
              </td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[10rem]">
                {process.name}
              </td>
              <td className="px-2 py-2 sm:px-4 sm:py-3 whitespace-nowrap">
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
