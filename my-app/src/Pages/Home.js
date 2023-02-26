import location from '../images/location.png';
import mic from '../images/mic.png';
import HeaderArea from '../Components/Header';
import FooterArea from '../Components/Footer.js';
import ItemSlide from '../Components/Slider.js';
import PopularLocality from '../Components/PopularLocality';

export default function home(){
    return(
        <div className="App">
        <HeaderArea/>
        
        <div className = "SearchBox">
          <div className = "TitleMenu">
            <div id = "Buy">
              <h2>Buy</h2>
            </div>
            <div id = "Rent">
              <h2>Rent</h2>
            </div>
            <div id = "Pg">
              <h2>PG/Co-Living</h2>
            </div>
            <div id = "Commercial">
              <h2>Commercial</h2>
            </div>
            <div id = "Plot">
              <h2>Plot</h2>
            </div>
          </div>

          <div className = "SearchBar">
            <div class = "Search_Bar">
              <form action="google.com">
                <input type="text" placeholder="Search by location" name="search"/>
               </form>
            </div>
            <div class = "Location">
            <img src={location} alt="Location button"/>
            </div>
            <div class = "Mic">
            <img src={mic} alt="Mic button"/>
            </div>
            <div class = "Search">
              <button id = "SearchBtn">Search</button>
            </div>
           </div>
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">Projects in High Demand</h2>
          </div>
          <div class = "SlideBox">
            <ItemSlide/>
          </div>
          
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">Offers for you</h2>
          </div>
          <div class = "SlideBox">
            <ItemSlide/>
          </div>
          
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">HouseDekho Exclusive</h2>
          </div>
          <div class = "SlideBox">
            <ItemSlide/>
          </div>
          
        </div>

        <div class = "LocalityDiv">
          <div class = "TitleDiv">
            <h2 id = "Title">Popular Localities</h2>
          </div>
          <div class = "SlideBox">
            <PopularLocality/>
          </div>
          
        </div>

        <div class = "HighDemand">
          <div class = "TitleDiv">
            <h2 id = "Title">Customer Reviews</h2>
          </div>
          <div class = "SlideBox">
          
          </div>
          
        </div>

        <FooterArea/>
        
    </div>
    )
}