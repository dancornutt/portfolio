import React from 'react';
import Project from '../Project'

const Portfilio = () => {
  return (
    <div>
      <h1>Project Portfolio</h1>
      <Project
        title="Whale Watching Notification App"
        description="This application will send you text messages when whales are spotted in the area. Sign up to post a whale sighting and contribute."
        imagePath="https://raw.githubusercontent.com/dancornutt/UWB-02HW-Bootstrap/portfolioUpdate/resources/whalewatching.png"
        githubURL="https://github.com/watchNW/whale-watching"
        deployedURL="https://pnwwhalewatch.com/"
      />

      <Project
        title="Activity App"
        description="This application will suggest things to do in your local area as well as events which are happening near you."
        imagePath="https://raw.githubusercontent.com/dancornutt/UWB-02HW-Bootstrap/portfolioUpdate/resources/ActivityApp350.png"
        githubURL="https://github.com/dancornutt/UWB-ActivityApp"
        deployedURL="https://dancornutt.github.io/UWB-ActivityApp/"
      />

      <Project
        title="Weather App"
        description="Straight forward application which displays the current weather in locations you search on."
        imagePath="https://raw.githubusercontent.com/dancornutt/UWB-02HW-Bootstrap/portfolioUpdate/resources/weatherApp350.png"
        githubURL="https://github.com/dancornutt/UWB-06HW-WeatherDashboard"
        deployedURL="https://stormy-ridge-94604.herokuapp.com/"
      />
    </div>
  );
}

export default Portfilio;
