import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const DiskInfo = () => {
  const [diskInfo, setDiskInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/sys/diskInfo";

    axios
      .get(apiUrl)
      .then((response) => {
        setDiskInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Disk info:", error);
        setLoading(false);
      });
  }, []);

  const renderDoughnutChart = (used, percentage) => {
    const free = 100 - parseFloat(percentage);

    const data = {
      labels: ["Used", "Free"],
      datasets: [
        {
          data: [used, free],
          backgroundColor: ["#FF5733", "#00FF33"],
        },
      ],
    };

    const options = {
      responsive: true,
      cutoutPercentage: 75,
      legend: {
        display: false,
      },
    };

    return <Doughnut data={data} options={options} />;
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          Disk Information
        </p>
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {Object.keys(diskInfo).map((key, index) => {
              if (key.startsWith("Device")) {
                const device = diskInfo[key];

                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-[#2D2D2D] shadow-md p-4 rounded-lg mb-4"
                  >
                    <p className="text-[#000000] dark:text-[#FFF] text-[18px] font-semibold leading-[24px]">
                      {device["Device"]}
                    </p>
                    <p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
                      Mountpoint: {device["Mountpoint"]}
                    </p>
                    <p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
                      File System Type: {device["File system type"]}
                    </p>
                    <p className="text-[#5E6E78] dark:text-[#9CA3AF] text-[14px] leading-[22px]">
                      Total Size: {device["Total Size"]}
                    </p>
                    {renderDoughnutChart(
                      parseFloat(device["Used"]),
                      parseFloat(device["Percentage"])
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiskInfo;
