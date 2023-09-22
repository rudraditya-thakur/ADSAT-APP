import React, { useEffect, useState } from "react";
import axios from "axios";

const DirectoryStructure = () => {
  const [directoryData, setDirectoryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/directory/struct";

    axios
      .get(apiUrl)
      .then((response) => {
        setDirectoryData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching directory structure:", error);
        setLoading(false);
      });
  }, []);

  const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes >= 1024 * 1024) {
      return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
    } else if (sizeInBytes >= 1024) {
      return `${(sizeInBytes / 1024).toFixed(2)} KB`;
    } else {
      return `${sizeInBytes} bytes`;
    }
  };

  return (
    <div>
      <p className="text-[#000000] dark:bg-[#2D2D2D] dark:text-white dark:shadow-sm dark:shadow-[#90E0EF] text-[20px] font-semibold leading-[28px] shadow-sm bg-white shadow-[#00B4D8] py-2 px-4 w-full rounded-md mb-6">
				Directory Structure
			</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-2 border-[#00B4D8] px-4 py-2 dark:text-white ">File Name</th>
              <th className="border-2 border-[#00B4D8] px-4 py-2 dark:text-white ">File Size</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(directoryData).map(([fileName, fileSize]) => (
              <tr key={fileName}>
                <td className="border border-[#0077B6] dark:border-[#90E0EF] px-4 py-2 dark:text-white">{fileName}</td>
                <td className="border border-[#0077B6] dark:border-[#90E0EF] px-4 py-2 dark:text-white">
                  {formatFileSize(fileSize)}
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                Total
              </td>
              <td className="border border-gray-300 p-2 font-semibold">
                {formatFileSize(directoryData["Total"])}
              </td>
            </tr>
          </tfoot> */}
        </table>
      )}
    </div>
  );
};

export default DirectoryStructure;
