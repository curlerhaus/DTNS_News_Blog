const React = require('react');
const Def = require('../default');

function home() {
    return (
      <>
        <div className="header">
          {/* <img className="logo" src="./logo/logo-black.png" alt="DTNS Logo"></img>
          <h1>Your Worst Place for News</h1> */}
        </div>
        <Topnavbar />
        <CarouselFadeExample />
        <CardTemplate />
        <Footer />
      </>
    );
  }

module.exports = home