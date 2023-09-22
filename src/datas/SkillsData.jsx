import html from '../assets/Skillsicons/icon-html5.svg';
import css from '../assets/Skillsicons/icons-css3.svg';
import js from '../assets/Skillsicons/icon-javascript-color.svg';
import reactjs from '../assets/Skillsicons/icon-react-native.svg';
import redux from '../assets/Skillsicons/icon-redux.svg';
import adobe from '../assets/Skillsicons/adobe.svg';
import illustrator from '../assets/Skillsicons/Adobe_Illustrator_CC_icon.svg';
import indesign from '../assets/Skillsicons/Adobe_InDesign_CC_icon.svg';
import photoshop from '../assets/Skillsicons/Adobe_Photoshop_CC_icon.svg';
import sass from '../assets/Skillsicons/sass-sq.svg';
import ae from '../assets/Skillsicons/Adobe_After_Effects_CC_icon.svg'


const SkillsData = [
    {
      skills: [
        {
          id: 1,
          titre: "HTML",
          description: "HTML",
          image: [html],
          link: "https://www.w3schools.com/html/",
        },
        {
          id: 2,
          titre: "CSS",
          description: "Css",
          image: [css],
          link: "https://www.w3schools.com/css/",
        },
        {
          id: 3,
          titre: "SASS",
          description: "SASS",
          image: [sass],
          link: "https://sass-lang.com/",
        },
        {
          id: 4,
          titre: "Javascript",
          description: "Javascript",
          image: [js],
          link: "https://www.javascript.com/",
        },
        {
          id: 5,
          titre: "React",
          description: "React",
          image: [reactjs],
          link: "https://reactjs.org/",
        },
        {
          id: 6, 
          titre: "Redux", 
          description: "Redux",
          image: [redux],
          link: "https://redux.js.org/",
        },
        {
          id: 7,
          titre: "Adobe",
          description: "Adobe",
          image: [adobe],
          link: "https://www.adobe.com/",
        },
        {
          id: 8,
          titre: "Illustrator",
          description: "Illustrator",
          image: [illustrator],
          link: "https://www.adobe.com/fr/products/illustrator",
        },
        {
          id: 9,
          titre: "Indesign",
          description: "Indesign",
          image: [indesign],
          link: "https://www.adobe.com/fr/products/indesign",
        },
        {
          id: 10,
          titre: "After Effects",
          description: "After Effects",
          image: [ae],
          link: "https://www.adobe.com/fr/products/indesign",
        },
       
        {
          id: 11,
          titre: "Photoshop",
          description: "Photoshop",
          image: [photoshop],
          link: "https://www.adobe.com/fr/products/photoshop",
        }
      ]
    }
  ];
  
  export { SkillsData };