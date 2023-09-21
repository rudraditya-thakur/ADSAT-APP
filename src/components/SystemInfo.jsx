import React, { useState, useEffect } from "react";
import axios from "axios";

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of your FastAPI server's endpoint
    const apiUrl = "http://127.0.0.1:8000/sys/sysinfo";

    // Use Axios to make a GET request to the server
    axios.get(apiUrl)
      .then((response) => {
        // Handle the successful response
        setSystemInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching system info:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          System Info
        </p>
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            <li>
              <strong>System:</strong> {systemInfo.System}
            </li>
            <li>
              <strong>Node Name:</strong> {systemInfo["Node Name"]}
            </li>
            <li>
              <strong>Release:</strong> {systemInfo.Release}
            </li>
            <li>
              <strong>Version:</strong> {systemInfo.Version}
            </li>
            <li>
              <strong>Machine:</strong> {systemInfo.Machine}
            </li>
            <li>
              <strong>Processor:</strong> {systemInfo.Processor}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SystemInfo;
