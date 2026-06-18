import { useState } from 'react';
import Input from './Input.jsx';
import TextArea from './TextArea.jsx';

export default Education;

function Education({ onFormSubmit }) {
  const [education, setEducation] = useState({
    institutionName: '',
    degree: '',
    institutionStartDate: '',
    institutionEndDate: '',
    institutionDescription: '',
  });

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setEducation({
      ...education,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(education);
  }

  return (
    <section className="education-wrapper">
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
      <form
        action="#"
        method="POST"
        className="experience-form"
        id="experience-form"
        onSubmit={handleSubmit}
      >
        <div className="education-title">
          <h3>University 1</h3>
          <button type="button">X</button>
        </div>
        <Input
          title="Institution"
          id="institution-name"
          name="institutionName"
          type="text"
          handleChange={handleEducationChange}
          // value=""
          className="input education-name-input"
        />
        <Input
          title="Degree"
          id="degree-name"
          name="degree"
          type="text"
          handleChange={handleEducationChange}
          // value=""
          className="input degree-name-input"
        />
        <Input
          title="Start Date"
          id="institution-start-date"
          name="institutionStartDate"
          type="date"
          handleChange={handleEducationChange}
          // value=""
          className="input institution-start-date-input"
        />
        <Input
          title="End Date"
          id="institution-end-date"
          name="institutionEndDate"
          type="date"
          handleChange={handleEducationChange}
          // value=""
          className="input institution-end-date-input"
        />
        <TextArea
          title="Description"
          id="institution-description"
          name="institutionDescription"
          size={5}
          handleChange={handleEducationChange}
          // value=""
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
      </form>
    </section>
  );
}
