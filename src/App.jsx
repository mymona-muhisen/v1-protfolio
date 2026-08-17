import './App.css'
import CurserAnimate from './CurserAnimation.jsx';
import Navbar from './Navbar.jsx';
import Hero from './hero.jsx';
import Project from './project.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <CurserAnimate />
      <div className="projects" id="projects">
        <Project
          img="/img-1.jpg"
          title="That Al Ahed"
          link="https://github.com/mymona-muhisen/that-alahd.git"
          description="An e-contract platform for creating and signing contracts, with smart alerts for risky clauses."
        />
        <Project
          img="/img-2.jpg"
          title="GradShow"
          link="https://gradshow.pages.dev/"
          description="A platform connecting graduates with companies through practical tasks and skill-based scoring."
        />

        <Project
          img="/img-4.jpg"
          title="A Year Worth Saving"
          link="https://a-year-worth-saving.pages.dev/"
          description="An interactive journey through a year of memories, achievements, and personal moments, ending with a meaningful message."
        />
        <Project
          img="/img-5.jpg"
          title="MaLeap"
          link="https://github.com/mymona-muhisen/Maleap"
          description="A personal finance platform for tracking habits, generating insights, and predicting the impact of financial decisions."
        />
      </div>
    </>
  )
}

export default App
