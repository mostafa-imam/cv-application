import { useState } from 'react';
import Input from './Input.jsx';
import TextArea from './TextArea.jsx';

export default Experience;

function Experience({ onFormSubmit }) {
  const [experience, setExperience] = useState({
    companyName: '',
    position: '',
    companyStartDate: '',
    companyEndDate: '',
    companyDescription: '',
  });

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(experience);
  }

  return (
    <section className="experience-wrapper">
      <form
        action="#"
        method="POST"
        className="experience-form"
        id="experience-form"
        onSubmit={handleSubmit}
      >
        <div className="company-title">
          <h3>{experience.companyName || 'Company X'}</h3>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ width: '20px', height: '20px' }}
            >
              <title>trash-can-outline</title>
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
          </button>
        </div>
        <Input
          title="Company"
          id="company-name"
          name="companyName"
          type="text"
          handleChange={handleExperienceChange}
          value={experience.companyName}
          className="input company-name-input"
        />
        <Input
          title="Position"
          id="position-name"
          name="position"
          type="text"
          handleChange={handleExperienceChange}
          value={experience.position}
          className="input position-input"
        />
        <Input
          title="Start Date"
          id="company-start-date"
          name="companyStartDate"
          type="date"
          handleChange={handleExperienceChange}
          value={experience.companyStartDate}
          className="input company-start-date-input"
        />
        <Input
          title="End Date"
          id="company-end-date"
          name="companyEndDate"
          type="date"
          handleChange={handleExperienceChange}
          value={experience.companyEndDate}
          className="input company-end-date-input"
        />
        <TextArea
          title="Responsibilities"
          id="responsibilities-description"
          name="companyDescription"
          size={5}
          handleChange={handleExperienceChange}
          value={experience.companyDescription}
          className="text-area experience-text-area"
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: '20px', height: '20px' }}
          >
            <title>content-save</title>
            <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
          </svg>
          Save
        </button>
        <hr />
      </form>
    </section>
  );
}
