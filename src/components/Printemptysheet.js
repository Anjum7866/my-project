import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Emptysheet from "./EmptySheet";

const Printemptysheet = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div>
      <Emptysheet ref={componentRef} />
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

export default Printemptysheet