import React from "react";
import ProcessesTable from "../components/ProcessesTable";

function ProcessPage() {
  return (
    <div className="py-28">
      <div className="py-28">
        <div className="flex-wrap min-1728px:flex-nowrap flex mt-27px gap-25px">
          <div className="bg-white dark:bg-[#1C1C25] rounded-15px py-21px px-30px w-full min-1120px:w-auto">
            <ProcessesTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;
