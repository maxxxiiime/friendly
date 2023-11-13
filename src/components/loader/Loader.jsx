import React, { useEffect } from "react";
import "./loader.scss"
function Loader() {

  useEffect(() => {
    console.log("Loader mounted");
    return () => {
      console.log("Loader unmounted");
    };
  }, []);
  return (
    <div className="loader">
     
    </div>
  );
}
export default Loader;