import { useState } from 'react'
import './App.css'
import WindowTracker from './WindowT'
import Logo from './Logo'
import Stars from './Stars'

const speakers = [
  {
    name: "Ben Schreiner",
    title: "Head of AI & Modern Data Strategy at",
    company: "AWS",
    topic: "AI Strategy & Modern Data in the Enterprise",
    bio: "a platinum-status keynote speaker with over 25 years advising CIOs and Fortune 500 leaders. A certified AI practitioner and Safe AI Ambassador, Ben brings a rare blend of technical depth and human-centered leadership — helping organizations cut through the hype and turn AI into real, measurable results.",
    date: "April 4, 2026, 8:30 AM - 11:30 AM",
    location: "Rancho Santa Margarita, CA",
    image: "../Elements/BenS.png",
  },
  {
    name: "Andy Oliva",
    title: "OpenAI Forum Leader and Founder of",
    company: "Lucky Day Labs",
    topic: "Vibe Coding & The Future of AI-First Building",
    bio: "an OpenAI Forum Leader, AI/ML certified product designer, and founder of Lucky Day Labs, where he scaled a client SaaS to $200K ARR. With a track record spanning Apple, Sotheby's, and Berkshire Hathaway, Andy sits at the intersection of human creativity and applied artificial intelligence.",
    date: "May 5, 2026, 8:30 AM - 11:30 AM",
    location: "Rancho Santa Margarita, CA",
    image: "../Elements/AndyO.png",
  },
  {
    name: "Chris Eckman",
    title: "SVP of Operations and OTT Services at",
    company: "The Africa Channel",
    topic: "Streaming, OTT Growth & the Future of Digital Media",
    bio: "the SVP of Operations and OTT Services at The Africa Channel, where he transformed the network's digital footprint — growing streaming viewership by over 1,000% and paid subscribers by 63% in a single year. A USC MBA and Army veteran, Chris turns bold strategy into measurable results.",
    date: "June 6, 2026, 8:30 AM - 11:30 AM",
    location: "Rancho Santa Margarita, CA",
    image: "../Elements/ChrisE.png",
  },
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const speaker = speakers[currentIndex]
  const goNext = () => setCurrentIndex((i) => (i + 1) % speakers.length)
  const goPrev = () => setCurrentIndex((i) => (i - 1 + speakers.length) % speakers.length)

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
            <p className="event-topic">{speaker.topic}</p>
            <p className="event-date">{speaker.date}</p>
            <p className="event-location">📍 {speaker.location}</p>
            <div className="arrow-group">
              <button className="arrow-btn" onClick={goPrev}>&#8592;</button>
              <button className="arrow-btn" onClick={goNext}>&#8594;</button>
            </div>
          </div>

          <div className="event-description">
            <strong>{speaker.name}</strong> is {speaker.title} <strong>{speaker.company}</strong> and {speaker.bio}
          </div>

          <div className="benS">
            <img src={speaker.image} alt={speaker.name} />
          </div>

          <div className="speaker-dots">
            {speakers.map((_, i) => (
              <span key={i} className={`dot ${i === currentIndex ? 'dot-active' : ''}`} onClick={() => setCurrentIndex(i)} />
            ))}
          </div>

          <div className="diagonal-streak-two"></div>
        </div>
      </div>
    </div>
  )
}

export default App