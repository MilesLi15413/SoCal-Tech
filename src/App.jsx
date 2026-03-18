import './App.css'
import WindowTracker from './WindowT'
import Logo from './Logo'
import Stars from './Stars'
function App() {
  return (
    <div>
      <div className="background-section">
        <WindowTracker />
        
        <div className="content-wrapper">
          <div className="text-and-images">
            <div className="text-block">
              <h1 className="content-title">Building Community Through Technology</h1>
              <p className="content-sub-title">As a 501(c)(3) nonprofit, SoCal Tech Forum strives to cultivate an environment where networking, learning, and sharing ideas drive the growth of technology and its impact on daily life.</p>
            </div>
            <div className="image-block">
              <div className="photo-circle">
                <img src="../Elements/Chris.jpg" />
              </div>
              <div className="photo-circle-ppl">
                <img src="../Elements/SoCal.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div> {/* background section*/}
       
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  <Logo />
</div>

    <div className="title-two" > 
    We're a <span className="highlight"> monthly gathering </span> that unites career technologists, hobbyists, and entrepreneurs for <span className="streak">dynamic discussions</span> on the lastest technology trends.
    </div>

    <div className= "sponsor-section" style={{ position: 'relative' }}> <Stars />
        <div className="sponsor-text"> SPONSORING OUR MISSION</div>

    </div>


    </div>
  )
}

export default App