import React from "react";
const PrintJobsheet =  React.forwardRef((props, ref) =>  {

    const full_nameRef = React.useRef();
    const companyRef = React.useRef();
  
    const handleSubmit = () => {
      console.log(full_nameRef.current.value, companyRef.current.value);
    };
  
    return (
      <div ref={ref}>
        <label>
          full_name
          <input ref={full_nameRef} />
        </label>
        <br />
        <label>
          company
          <input ref={companyRef} />
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  });
  
  export default PrintJobsheet