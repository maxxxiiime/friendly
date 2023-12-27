import React from 'react';
import Typed from 'react-typed';
import "./textanim.scss"
class TextAnim extends React.Component {
  render() {
    return (
      <div className="text-animation">
       <span> Friendly </span>
        <Typed
          strings={[' Web | Graphic Designer',' Designer', ' Web Developer']}
          typeSpeed={70} // Vitesse de frappe
          backSpeed={20} // Vitesse de retour
          backDelay={2300} // Délai avant le retour en arrière
          loop
          startDelay={1400} // Délai avant le début de la boucle
        />
      </div>
    );
  }
}

export default TextAnim;