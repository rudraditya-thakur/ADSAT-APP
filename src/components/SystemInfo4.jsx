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
      <div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[30px] w-full min-[1120px]:w-auto shadow-md
       shadow-[#90E0EF] dark:shadow-sm dark:shadow-[#90E0EF]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="dark:text-white">
            <li>
              <strong>System:</strong> {systemInfo.System}
            </li>
            <li>
              <strong>Node Name:</strong> {systemInfo["Node Name"]}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SystemInfo;
