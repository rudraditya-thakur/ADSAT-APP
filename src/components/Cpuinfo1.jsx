import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionChart from "./TransactionChart"; // Import the TransactionChart component

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
      <div className="">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            
            {/* <div className="grid grid-cols-3 gap-4">
              <div>
                <p>Physical Cores: {cpuInfo["Physical cores"]}</p>
              </div>
              <div>
                <p>Total Cores: {cpuInfo["Total cores"]}</p>
              </div>
              <div>
                <p>Total CPU Usage: {cpuInfo["Total CPU Usage"]}</p>
              </div>
            </div> */}

            {/* Frequency Details */}
            {/* <h2 className="text-[#000000] dark:text-[#FFF] text-[16px] font-semibold leading-[24px] mt-4 mb-2">
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
            </div> */}

            {/* Core Usage Bar Graph */}
            <div className="">
              <TransactionChart coreData={cpuInfo} />
            </div>
            <div className="">

            </div>
          </div> 
        )}
      </div>
    </div>
  );
};

export default CpuInfo;
