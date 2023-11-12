import React, { useEffect } from "react";
import Header from "../header/Header";
function Loader() {

  useEffect(() => {
    console.log("Loader mounted");
    return () => {
      console.log("Loader unmounted");
    };
  }, []);

  return (
    
    <div className="loader">
      <Header />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;