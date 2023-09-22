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
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const renderTable = () => {
    return (
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Interface</th>
            <th className="px-4 py-2">Download</th>
            <th className="px-4 py-2">Upload</th>
            {/* <th className="px-4 py-2">Upload Speed</th>
            <th className="px-4 py-2">Download Speed</th> */}
          </tr>
        </thead>
        <tbody>
          {Object.keys(networkData).map((ifaceKey, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{networkData[ifaceKey]["iface"]}</td>
              <td className="border px-4 py-2">{networkData[ifaceKey]["Download"]}</td>
              <td className="border px-4 py-2">{networkData[ifaceKey]["Upload"]}</td>
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
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          Network Interfaces
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