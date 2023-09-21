import React, { useState, useEffect } from "react";
import axios from "axios";

const CpuInfo = () => {
  const [cpuInfo, setCpuInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of your FastAPI server's endpoint for CPU information
    const apiUrl = "http://127.0.0.1:8000/sys/cpuInfo";

    // Use Axios to make a GET request to the server
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
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          CPU Information
        </p>
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {/* Core Details */}
            <h2 className="text-[#000000] dark:text-[#FFF] text-[16px] font-semibold leading-[24px] mt-4 mb-2">
              Core Details
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p>Physical Cores: {cpuInfo["Physical cores"]}</p>
              </div>
              <div>
                <p>Total Cores: {cpuInfo["Total cores"]}</p>
              </div>
              <div>
                <p>Total CPU Usage: {cpuInfo["Total CPU Usage"]}</p>
              </div>
            </div>

            {/* Frequency Details */}
            <h2 className="text-[#000000] dark:text-[#FFF] text-[16px] font-semibold leading-[24px] mt-4 mb-2">
              Frequency Details
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p>Max Frequency: {cpuInfo["Max Frequency"]}</p>
              </div>
              <div>
                <p>Min Frequency: {cpuInfo["Min Frequency"]}</p>
              </div>
              <div>
                <p>Current Frequency: {cpuInfo["Current Frequency"]}</p>
              </div>
            </div>

            {/* Core Usage Bar Graph */}
            <h2 className="text-[#000000] dark:text-[#FFF] text-[16px] font-semibold leading-[24px] mt-4 mb-2">
              Core Usage
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {Object.keys(cpuInfo)
                .filter((key) => key.startsWith("Core"))
                .map((coreKey, index) => (
                  <div key={index}>
                    <p>
                      {coreKey}: {cpuInfo[coreKey]}
                    </p>
                    {/* You can use a bar graph here to represent core usage */}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CpuInfo;
