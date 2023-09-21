import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';

const MemoryInfoChart = () => {
  const [memoryInfo, setMemoryInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of your FastAPI server's endpoint for memory information
    const apiUrl = "http://127.0.0.1:8000/sys/memInfo";

    // Use Axios to make a GET request to the server
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response and set the memory info
        setMemoryInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching memory info:", error);
        setLoading(false);
      });
  }, []);

  // Extract data for Virtual Memory
  const virtualMemoryTotal = parseFloat(memoryInfo["Virtual Memomry"]?.Total || "0GB");
  const virtualMemoryAvailable = parseFloat(memoryInfo["Virtual Memomry"]?.Available || "0MB");
  const virtualMemoryUsed = parseFloat(memoryInfo["Virtual Memomry"]?.Used || "0GB");
  const virtualMemoryPercentage = parseFloat(memoryInfo["Virtual Memomry"]?.Percentage || "0%");

  // Extract data for Swap
  const swapTotal = parseFloat(memoryInfo.swap?.Total || "0GB");
  const swapFree = parseFloat(memoryInfo.swap?.Free || "0GB");
  const swapUsed = parseFloat(memoryInfo.swap?.Used || "0GB");
  const swapPercentage = parseFloat(memoryInfo.swap?.Percentage || "0%");

  // Prepare data for the Virtual Memory pie chart
  const virtualMemoryData = {
    labels: ["Available", "Used", "Unused"],
    datasets: [
      {
        data: [virtualMemoryAvailable, virtualMemoryUsed, virtualMemoryTotal - virtualMemoryUsed - virtualMemoryAvailable],
        backgroundColor: ["#00DC57", "#FF4136", "#DDDDDD"],
      },
    ],
  };

  // Prepare data for the Swap pie chart
  const swapData = {
    labels: ["Free", "Used"],
    datasets: [
      {
        data: [swapFree, swapUsed],
        backgroundColor: ["#00DC57", "#FF4136"],
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      align: "center",
      position: "bottom",
    },
    plugins: {
      title: {
        display: true,
        text: "Memory Information",
        color: "blue",
        font: {
          size: 20,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  };

  return (
    <div>
      {loading ? (
        <p>Loading memory info...</p>
      ) : (
        <div>
          <div>
            <h2>Virtual Memory</h2>
            <Doughnut data={virtualMemoryData} options={options} />
          </div>
          <div>
            <h2>Swap</h2>
            <Doughnut data={swapData} options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryInfoChart;
