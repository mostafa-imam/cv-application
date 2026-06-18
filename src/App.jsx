// import heroImg from './assets/hero.png'
import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Preview from './components/preview.jsx';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  function handleGeneralSubmit(data) {
    setGeneralInfo(data);
  }

  const [experience, setExperience] = useState({});
  function handleExperienceSubmit(data) {
    setExperience(data);
  }

  const [education, setEducation] = useState({});
  function handleEducationChange(data) {
    setEducation(data);
  }

  return (
    <>
      <header>
        <h1>CV Builder</h1>
        <p>
          Built for
          <a
            href="https://www.theodinproject.com/lessons/node-path-react-new-cv-application"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project
          </a>
        </p>
      </header>

      <main>
        <section className="editor">
          <GeneralInfo onFormSubmit={handleGeneralSubmit} />

          <section className="experience">
            <Experience onFormSubmit={handleExperienceSubmit} />
            <hr />
            <button className="add-experience">+</button>
          </section>

          <section className="education">
            <Education onFormSubmit={handleEducationChange} />
            <hr />
            <button className="add-education">+</button>
          </section>
        </section>

        <aside className="preview">
          <Preview
            generalInfo={generalInfo}
            experience={experience}
            education={education}
          />
        </aside>
      </main>
    </>
  );
}
