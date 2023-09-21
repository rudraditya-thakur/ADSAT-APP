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
      <div className="flex justify-between items-center">
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          Boot Time
        </p>
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bootTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">System Boot</td>
              </tr>
              {/* Add more rows for additional boot events if needed */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BootTimeTable;
