import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Jobsheet from "./Jobsheet";

const PrintJob = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div>
      <Jobsheet ref={componentRef} />
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        {" "}
        Print Jobsheet{" "}
      </button>
      
    </div>
  );
};

export default PrintJob