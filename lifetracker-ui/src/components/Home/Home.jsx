import React from 'react';
import './Home.css';

const Home = ({ loggedIn, currentUserName }) => {
  return (
    <div className="home-page">
      <h2 className="home-title">LifeTracker</h2>

      {loggedIn && (
        <div className="welcome-message">Welcome, {currentUserName}!</div>
      )}
      {!loggedIn && <div className="login-message">Login To track your data</div>}
      

      <div id = "home-banner"> </div>

      <div className="section-container">
        <div className="section">
          <img className = "tile-icon" src  = {"src/assets/bed.svg"}/>
          <p>Track your sleep patterns.</p>
        </div>
        <div className="section">
        <img className = "tile-icon" src  = {"src/assets/nutrition.svg"}/>
          <p>Log your meals and monitor your nutritional intake.</p>
        </div>
        <div className="section">
        <img className = "tile-icon" src  = {"src/assets/exercise.svg"}/>
          <p>Record your workouts and track your fitness progress.</p>
        </div>
      
      </div>
      
    </div>
  );
};

export default Home;



















// import React from 'react';
// import './Home.css';

// const Home = ({ loggedIn, currentUserName }) => {
//   return (
//     <div className="home-banner">
//       <h2>Home</h2>

//       {loggedIn && <div className="welcome-banner">Welcome {currentUserName}</div>}

//       {!loggedIn && <div className="welcome-banner">Login first</div>}
//     </div>
//   );
// };

// export default Home;
