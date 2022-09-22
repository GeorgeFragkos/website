const facebookHeader = "FacebookClone";
const facebookUrl = "https://github.com/GeorgeFragkos/FacebookClone";
const facebookText =
  "A facebook clone web app with REACT JS and The MERN STACK.I created this project to learn and implement some real world features like authentication, authorization, validation and more.";
const facebookTechnologies = ["React", "Express.js", "Nodejs", "MongoDB"];

const webSiteHeader = "My Website";
const websiteUrl = "https://github.com/GeorgeFragkos/website";
const webSiteText =
  "My personal web site to share about the things im working and learning. ";
const websiteTechnologies = ["React", "TypeScript", "Html", "chakra-ui"];

const treasureHuntHeader = "Treasure Hunt Game Front End";
const treasureHuntUrl = "https://gitlab.com/9gang/treasurehunt__front__end";
const treasureHuntText =
  "A project for the Software Development course. In this project I was a part of a team with the aim of delivering a treasure hunt game using agile methodology.";
const treasureHuntTechnologies = ["Android", "Java", "Google Maps"];

const treasureHuntBackEndHeader = "Treasure Hunt Back End Api";
const treasureHuntBackEndUrl = "https://gitlab.com/9gang/treasurehunt_back_end";
const treasureHuntBackEndText =
  "This project is the api which provides data and authentication to front end. ";
const treasureHuntBackEndTechnologies = ["Java", "Spring Boot"];

const restApiHeader = "Rest Api";
const restApiUrl = "https://github.com/GeorgeFragkos/RestApi";
const restApiText =
  "A Demo .Net core 5 restful Api aimed to understand the Restful architecture and the most design principals.";
const restApiTechnologies = ["C#", ".Net", "RESTful "];

export default function PortfolioData() {
  return [
    {
      id: 1,
      header: facebookHeader,
      url: facebookUrl,
      text: facebookText,
      technologies: facebookTechnologies,
    },
    {
      id: 2,
      header: webSiteHeader,
      url: websiteUrl,
      text: webSiteText,
      technologies: websiteTechnologies,
    },
    {
      id: 3,
      header: treasureHuntHeader,
      url: treasureHuntUrl,
      text: treasureHuntText,
      technologies: treasureHuntTechnologies,
    },
    {
      id: 4,
      header: treasureHuntBackEndHeader,
      url: treasureHuntBackEndUrl,
      text: treasureHuntBackEndText,
      technologies: treasureHuntBackEndTechnologies,
    },
    {
      id: 5,
      header: restApiHeader,
      url: restApiUrl,
      text: restApiText,
      technologies: restApiTechnologies,
    },
  ];
}
