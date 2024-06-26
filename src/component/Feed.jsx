import React from "react";
import one from '../assets/Feed/one.png';
import two from '../assets/Feed/two.png';
import three from '../assets/Feed/three.png';
import live from '../assets/Live.png';
import github from '../assets/github.png';

import './styles.css';

export default function Feed() {
  const handlegitPress = () => {
    window.open("https://github.com/Dinesh-122333/Feed", "_blank"); // Replace with your GitHub repository URL
  };

  const handlePrevClick = () => {
    document.getElementById('carouselExampleIndicatorsFeed').carousel('prev'); // Manually trigger carousel to go to previous slide
  };

  const handleNextClick = () => {
    document.getElementById('carouselExampleIndicatorsFeed').carousel('next'); // Manually trigger carousel to go to next slide
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h5 className="main_font">Feed</h5>
      </div>
      
      <div id="carouselExampleIndicatorsFeed" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicatorsFeed" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicatorsFeed" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicatorsFeed" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="d-block w-75 mx-auto" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-75 mx-auto" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-75 mx-auto" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsFeed" data-bs-slide="prev" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsFeed" data-bs-slide="next" onClick={handleNextClick}>
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center py-5 px-5 para_color">
        <p className="text-center px-3 h5">
          Feed is a comprehensive feedback management system designed to gather and display user feedback efficiently. 
          By submitting their feedback through an intuitive form, users can easily share their thoughts and opinions. 
          The submitted feedback is then displayed in a dedicated section below, allowing everyone to view and review the inputs. 
          Feed is built with a responsive design, ensuring a seamless experience across both desktop and mobile devices. 
          This user-friendly approach to collecting and displaying feedback makes Feed an invaluable tool for understanding and improving user satisfaction.
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <p className="h6 main_font" onClick={handlegitPress} style={{ cursor: 'pointer' }}>
          Code <img src={github} className="icon-width" alt="git" />
        </p>
      </div>
    </>
  );
}
