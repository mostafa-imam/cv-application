// import heroImg from './assets/hero.png'
import { useState } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Preview from './components/preview.jsx';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [experiences, setExperiences] = useState([{ id: crypto.randomUUID() }]);
  const [education, setEducation] = useState([{ id: crypto.randomUUID() }]);

  function handleGeneralSubmit(data) {
    setGeneralInfo(data);
  }

  function handleExperienceSubmit(id, data) {
    setExperiences(
      experiences.map((exp) => {
        if (exp.id === id) {
          return { ...exp, ...data };
        }
        return exp;
      }),
    );
  }

  function handleEducationSubmit(id, data) {
    setEducation(
      education.map((ed) => {
        if (ed.id === id) {
          return { ...ed, ...data };
        }
        return ed;
      }),
    );
  }

  function addExperienceSection() {
    setExperiences([...experiences, { id: crypto.randomUUID() }]);
  }

  function addEducationSection() {
    setEducation([...education, { id: crypto.randomUUID() }]);
  }

  function handleDeleteExperience(id) {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  }

  function handleDeleteEducation(id) {
    setEducation(education.filter((ed) => ed.id !== id));
  }

  return (
    <>
      <main>
        <section className="editor">
          <GeneralInfo onFormSubmit={handleGeneralSubmit} />

          <section className="experience">
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: '20px', height: '20px' }}
              >
                <title>briefcase-outline</title>
                <path d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z" />
              </svg>
              Practical Experience
            </h2>
            {experiences.map((exp) => (
              <Experience
                key={exp.id}
                onFormSubmit={(data) => handleExperienceSubmit(exp.id, data)}
                onDelete={() => handleDeleteExperience(exp.id)}
              />
            ))}

            <button className="add-experience" onClick={addExperienceSection}>
              Add Experience
            </button>
          </section>

          <section className="education">
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: '20px', height: '20px' }}
              >
                <title>school-outline</title>
                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
              </svg>
              Education
            </h2>
            {education.map((ed) => (
              <Education
                key={ed.id}
                onFormSubmit={(data) => handleEducationSubmit(ed.id, data)}
                onDelete={() => handleDeleteEducation(ed.id)}
              />
            ))}

            <button className="add-education" onClick={addEducationSection}>
              Add Education
            </button>
          </section>
        </section>

        <aside className="preview">
          <Preview
            generalInfo={generalInfo}
            experiences={experiences}
            education={education}
          />
        </aside>
      </main>

      <footer>
        <div className="footer-container">
          <p>
            Built for &nbsp;
            <a
              href="https://www.theodinproject.com/lessons/node-path-react-new-cv-application"
              target="_blank"
              rel="noreferrer"
            >
              The Odin Project
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              style={{ display: 'inline' }}
            >
              <title>link-variant</title>
              <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
            </svg>
          </p>
        </div>
      </footer>
    </>
  );
}
