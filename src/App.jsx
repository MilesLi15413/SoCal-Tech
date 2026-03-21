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
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Logo />
      </div>

      <div className="title-two">
        We're a <span className="highlight"> monthly gathering </span> that unites career technologists, hobbyists, and entrepreneurs for <span className="streak">dynamic discussions</span> on the lastest technology trends.
      </div>

      <div className="sponsor-section" style={{ position: 'relative' }}>
        <Stars />
        <div className="sponsor-text"><span className="bracket-wrap">SPONSORING OUR MISSION</span></div>
        <div className="sponsor-logos">
          <img className="logo-klatch" src="../Elements/Klatch.png" />
          <img className="logo-cstacks" src="../Elements/CStacks.png" />
          <img className="logo-verizon" src="../Elements/Verizon.png" />
          <img className="logo-foundr" src="../Elements/Foundr.png" />
          <img className="logo-hueman" src="../Elements/Hueman.png" />
        </div>
        <div className="events-band">
          <div className="diagonal-streak-one">
            <div className="upcoming-events">UPCOMING EVENTS</div>
          </div>
          <div className="event-info">
            <h2 className="event-title">SoCal Tech Forum</h2>
            <p className="event-date">April 15, 2026</p>
            <p className="event-location">📍 Rancho Santa Margarita, CA</p>
          </div>
          <div className="event-description">
    <strong>Ben Schreiner</strong> is Head of AI & Modern Data Strategy at <strong>AWS</strong> and a platinum-status keynote speaker with over 25 years advising CIOs and Fortune 500 leaders. A certified AI practitioner and Safe AI Ambassador, Ben brings a rare blend of technical depth and human-centered leadership — helping organizations cut through the hype and turn AI into real, measurable results.
          </div>
          <div className="benS">
            <img src="../Elements/BenS.png" />
          </div>
          <div className="diagonal-streak-two"></div>
        </div>
      </div>

    </div>
  )
}

export default App