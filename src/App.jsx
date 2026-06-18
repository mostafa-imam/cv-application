// import { useState } from 'react'
// import heroImg from './assets/hero.png'
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Preview from './components/preview.jsx';

export default function App() {
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
          <GeneralInfo />
          <section className="experience">
            <Experience />
            <hr />
            <button className="add-experience">+</button>
          </section>
          <section className="education">
            <Education />
            <hr />
            <button className="add-education">+</button>
          </section>
        </section>
        <aside className="preview">
          <Preview />
        </aside>
      </main>
    </>
  );
}
