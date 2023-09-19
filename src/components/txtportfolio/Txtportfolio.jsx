// import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';
import './txtportfolio.scss';

function Txtportfolio() {
  // const [hasLoaded, setHasLoaded] = useState(false);

  // useEffect(() => {
  //   if (!hasLoaded) {
  //     setHasLoaded(true);
  //   }
  // }, [hasLoaded]);

  return (
    <div className="text-portfolio">
      {/* {hasLoaded && (
        < > */}
         
          <Typed
            strings={['Voici quelques exemples de mes réalisations']}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1}
            loop={false}
          />
        {/* </>
      )} */}
    </div>
  );
}

export default Txtportfolio;