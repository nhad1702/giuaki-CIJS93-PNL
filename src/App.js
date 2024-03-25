import './App.css';

function App() {
  return (
    <div className = "outline">
        <header className = "head">
          <div className = "left">
            <div className = "title">
              <h1>Anonime</h1>
            </div>
            <div className = "navigation">
              <ul className = "nav">
                <li><a href="App.js">Home</a></li>
                <li><a href="App.js">List anime</a></li>
              </ul>
            </div>
          </div>
          <div className = "search">
            <input type='text' className = "searchBox" placeholder='Search anime or movie' />
          </div>
        </header>
        <main className='main'>
          <div className ="quote">
            <h1>
              Explore
            </h1>
            <p>
              What are you gonna watch today?
            </p>
          </div>
          <div className = "carousel">
            <div className = "carouselTitle">
              <h1>Weather with you</h1>
              <p>
              Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. 
              </p>
            </div>
          </div>
          <div className = "newRelease">
            <h1>New Release</h1>
            <div className = "displayFlex">
              <div className = "box">
                <div className = "imgFilm0">
                  <div className = "pr">
                    <p>Episode 1018</p>
                  </div>
                </div>
                <h3 className = "titleFilm">One Piece</h3>
              </div>
              <div className = "box">
                <div className = "imgFilm1">
                  <div className = "pr">
                    <p>Episode 250</p>
                  </div>
                </div>
                <h3 className = "titleFilm">Boruto Naruto Next Generations</h3>
              </div>
              <div className = "box">
                <div className = "imgFilm2">
                  <div className = "pr">
                    <p>Episode 07</p>
                  </div>
                </div>
                <h3 className = "titleFilm">Spy x Family</h3>
              </div>
              <div className = "box">
                <div className = "imgFilm3">
                  <div className = "pr">
                    <p>Episode 28</p>
                  </div>
                </div>
                <h3 className = "titleFilm">Attack on Titans</h3>
              </div>
              <div className = "box">
                <div className = "imgFilm4">
                  <div className = "pr">
                    <p>Episode 28</p>
                  </div>
                </div>
                <h3 className = "titleFilm">Captain Tsubasa</h3>
              </div>
              <div className = "box">
                <div className = "imgFilm5">
                  <div className = "pr">
                    <p>Episode 28</p>
                  </div>
                </div>
                <h3 className = "titleFilm">Aoashi</h3>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
