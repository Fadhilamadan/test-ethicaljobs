// create a new div element to hold React Slick
const reactSlickContainer = document.createElement('div');
document.body.appendChild(reactSlickContainer);

// load React and ReactDOM from CDN
const reactScript = document.createElement('script');
reactScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js';
document.head.appendChild(reactScript);

const reactDOMScript = document.createElement('script');
reactDOMScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js';
document.head.appendChild(reactDOMScript);

// load React Slick from CDN
const slickScript = document.createElement('script');
slickScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
document.head.appendChild(slickScript);

// wait for React, ReactDOM and React Slick to load, then render the Slick Slider in the created div
Promise.all([
  new Promise(resolve => reactScript.addEventListener('load', resolve)),
  new Promise(resolve => reactDOMScript.addEventListener('load', resolve)),
  new Promise(resolve => slickScript.addEventListener('load', resolve)),
]).then(() => {
  const Slider = window.ReactSlick.default;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderContent = (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
    </Slider>
  );

  ReactDOM.render(sliderContent, reactSlickContainer);
}).catch(error => console.error('Error loading React, ReactDOM or React Slick:', error));

const topSearchesSection = document.querySelector("#__next > div.Layoutstyles__PageLayout-sc-izptpq-0.fKnNJT > main > div.JobSearchstyles__JobSearchContainer-sc-odq6ly-0.kYLcQJ");

if (topSearchesSection) {
  topSearchesSection.appendChild(reactSlickContainer);
}
