import React from "react";

const Table = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p>No data available.</p>;
  }

  // Extract keys (cores) from the data object
  const cores = Object.keys(data);

  return (
    <div className="overflow-x-auto dark:bg-[#1C1C25]">
      <table className="min-w-full table-auto">
        <tbody>
          {cores.map((core, coreIndex) => (
            <tr key={coreIndex}>
              <td className="px-4 py-[8px] border-b border-[#f2f2f2] dark:border-[#272730] text-[#000] dark:text-white text-[12px] font-semibold leading-7 text-start pl-0">
                {core}
              </td>
              <td className="px-4 py-[8px] border-b border-[#f2f2f2] dark:border-[#272730] text-[#000] dark:text-white text-[12px] font-medium leading-[22px] text-end">
                {data[core]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
