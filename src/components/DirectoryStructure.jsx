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
      <h2 className="text-2xl font-semibold mb-4">Directory Structure</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">File Name</th>
              <th className="border border-gray-300 p-2">File Size</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(directoryData).map(([fileName, fileSize]) => (
              <tr key={fileName}>
                <td className="border border-gray-300 p-2">{fileName}</td>
                <td className="border border-gray-300 p-2">
                  {formatFileSize(fileSize)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                Total
              </td>
              <td className="border border-gray-300 p-2 font-semibold">
                {formatFileSize(directoryData["Total"])}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default DirectoryStructure;
