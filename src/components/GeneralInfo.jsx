import { useState } from 'react';
import Input from './Input.jsx';

export default GeneralInfo;

function GeneralInfo({ onFormSubmit }) {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  function handleGeneralChange(event) {
    const { name, value } = event.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(generalInfo);
  }

  return (
    <section className="general-info-wrapper">
      <h2>General Information</h2>
      <form
        action="#"
        method="POST"
        id="general-info-form"
        className="general-info-form"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <Input
          title="Full Name"
          id="full-name"
          name="fullName"
          type="text"
          handleChange={handleGeneralChange}
          // value=""
          className="input full-name-input"
        />
        <Input
          title="Email"
          id="email"
          name="email"
          type="email"
          handleChange={handleGeneralChange}
          // value=""
          className="input email-input"
        />
        <Input
          title="Phone"
          id="phone"
          name="phone"
          type="tel"
          handleChange={handleGeneralChange}
          // value=""
          className="input phone-input"
        />
        <Input
          title="Address"
          id="address"
          name="address"
          type="text"
          handleChange={handleGeneralChange}
          // value=""
          className="input address-input"
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
