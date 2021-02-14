import React from "react";

const About = () => {
  return (
    <main class="container">
      <div class="row">
          <section class="col-xs-12 col-sm-8">
              <div class="row">
                  <div class="col">
                      <h1>About Me</h1>
                      <hr/>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <figure class="col-8">
                          <img src="https://raw.githubusercontent.com/dancornutt/UWB-02HW-Bootstrap/portfolioUpdate/resources/AboutMe.jpg" class="img-fluid" alt="Picture of Me"/>
                      </figure>
                      <div class="pull-right">
                          <p> Growing up in the Northwest I was always outside enjoying nature and exploring. 
                              Most of my childhood was spent riding BMX bikes around the area. Bicycles sparked 
                              my curiosity and introduced me to mechanical devices. My interest in bicycles 
                              turned to cars once I was able to drive and my high school afternoons were spent 
                              in auto shop modifying and tuning local cars.
                          </p> 
                          <p> I was fortunate to make it to college and pursue my life goal of becoming
                              a mechanical engineer. It wasn't until my early college years where I was introduced 
                              to software and writing code. Many nights were spent in the CSE 141 computer lab learning java. 
                              For me it was fascinating and although I was on the path to become a mechanical engineer 
                              I heavily contemplated swithing to CSE.
                          </p>
                          <p> After graduation worked for a large aerospace company.
                              Although the aerospace world was interesting the world of technology was booming and drastically 
                              changing the world around me. I became curious. I decided to enroll in a certification 
                              in python web development. The python certification was extremely rewarding and but I 
                              was still curious on the intricacies of the internet and what made it work. I decided to
                              enroll in a bootcamp to further by breadth and depth of knowledge in web development.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
        </div>
    </main>
  );
}

export default About;
