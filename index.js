/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const MY_PROJECTS = [
  {
      title : 'Cult.Fit clone',
      project_desc : 'CultFit is a health and fitness company offering digital and offline experiences across fitness, nutrition, and mental well-being',
      tech_stack : 'JAVASCRIPT | NODEJS | EXPRESS | MONGODB | HTML | CSS',
      git_hub_link : 'https://github.com/Lpavan6445/Cult.fit-clone',
      live_link : 'https://cult-fit-clone-w13.herokuapp.com/',
      thumbnail : './images/cultfitImage.png'
  },
  {
      title : 'BookMyShow',
      project_desc : "BookMyShow is India's largest entertainment ticketing website. In this app user can book movie tickets by choosing the different theatres and timings accordingly.",
      tech_stack : 'REACT | REDUX | EXPRESS | JAVASCRIPT | MONGODB',
      git_hub_link : 'https://github.com/Lpavan6445/BookMyShow-Clone',
      live_link : 'https://book-my-show-clone-rust.vercel.app/',
      thumbnail : './images/homepage.png'
  },
  {
      title : 'MaxFashion',
      project_desc : "Max Fashion is an e-commerce website that sells lifestyle products to the Customers",
      tech_stack : 'JAVASCRIPT | HTML | CSS',
      git_hub_link : 'https://github.com/Lpavan6445/maxFashion-clone',
      live_link : 'http://max-fashion-clone.vercel.app/',
      thumbnail : './images/maxFashionImage.png'
  },
  {
      title : 'Live Weather',
      project_desc : "A beautiful weather app which shows Current weather and also forecasts next 7 days weather",
      tech_stack : 'React | JAVASCRIPT |  HTML |  CSS',
      git_hub_link : 'https://github.com/Lpavan6445/LiveWeather-App',
      live_link : 'https://live-weather-app-p5lix1lea-lpavan6445.vercel.app/',
      thumbnail : './images/liveWeather.png'
  },
  {
      title : 'Meal Finder',
      project_desc : "A meal plan generator app that helps the user to find meal and see the ingredients",
      tech_stack : 'JAVASCRIPT |  HTML |  CSS',
      git_hub_link : 'https://github.com/Lpavan6445/MealSearch-App',
      live_link : 'https://meal-search-app-eight.vercel.app/',
      thumbnail : './images/mealFinderImage.png'
  },
];



const myWorksDiv = window.document.getElementById("projec");
let innerHtml = '';
MY_PROJECTS.forEach(({
  title, 
  project_desc, 
  tech_stack,
  thumbnail,
  git_hub_link,
  live_link,
}) => {
  innerHtml += `
  <div data-aos="fade-up"data-aos-anchor-placement="bottom-bottom" class="sc-iqHYmW hMGSRy aos-init aos-animate">
  <div class="project_thumbnail">
    <img border="4px solid white" src=${thumbnail} alt="">
  </div>
  <div class="sc-dQoVA bOpVhN projectBottomDetails">
    <div class="sc-crrszt efwbxD">
      <h3>${title}</h3>
      <div class="sc-bqyKOL jtIpxz">
        <a href=${git_hub_link} target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
          </svg>
        </a>
        <a href=${live_link} target="_blank" rel="noopener noreferrer">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd">
            </path>
            <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd">
            </path>
          </svg>
        </a>
      </div>
    </div>
    <p>
     ${project_desc}
    </p>
    <div id="techStack">
      ${tech_stack}
    </div>
  </div>
  </div>
  `
});
myWorksDiv.innerHTML += innerHtml;
