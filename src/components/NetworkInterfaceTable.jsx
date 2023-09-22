import React, { useEffect, useState } from "react";
import axios from "axios";

const NetworkInterfaceTable = () => {
  const [networkData, setNetworkData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    const apiUrl = "http://127.0.0.1:8000/net/netusagePI";

    axios
      .get(apiUrl)
      .then((response) => {
        setNetworkData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching network interface data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up an interval to fetch data every 1 second
    const intervalId = setInterval(fetchData, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const renderTable = () => {
    return (
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border-2 border-[#00B4D8] px-4 py-2 dark:text-white">Interface</th>
            <th className="border-2 border-[#00B4D8] px-4 py-2 dark:text-white">Download</th>
            <th className="border-2 border-[#00B4D8] px-4 py-2 dark:text-white">Upload</th>
            {/* <th className="px-4 py-2">Upload Speed</th>
            <th className="px-4 py-2">Download Speed</th> */}
          </tr>
        </thead>
        <tbody>
          {Object.keys(networkData).map((ifaceKey, index) => (
            <tr key={index}>
              <td className="border border-[#0077B6] dark:border-[#90E0EF] px-4 py-2 dark:text-white">{networkData[ifaceKey]["iface"]}</td>
              <td className="border border-[#0077B6] dark:border-[#90E0EF] px-4 py-2 dark:text-white">{networkData[ifaceKey]["Download"]}</td>
              <td className="border border-[#0077B6] dark:border-[#90E0EF] px-4 py-2 dark:text-white">{networkData[ifaceKey]["Upload"]}</td>
              {/* <td className="border px-4 py-2">{networkData[ifaceKey]["Upload Speed"]}</td>
              <td className="border px-4 py-2">{networkData[ifaceKey]["Download Speed"]}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center">
      <p className="text-[#000000] dark:bg-[#2D2D2D] dark:text-white dark:shadow-sm dark:shadow-[#90E0EF] text-[20px] font-semibold leading-[28px] shadow-sm bg-white shadow-[#00B4D8] py-2 px-4 w-fit rounded-md">
				Network Interface
			</p>
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          renderTable()
        )}
      </div>
    </div>
  );
};

export default NetworkInterfaceTable;