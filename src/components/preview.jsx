export default Preview;

function Preview({ generalInfo, experience, education }) {
  return (
    <article className="cv-sheet">
      <div className="preview-general-info">
        <h1>{generalInfo.fullName || 'John Doe'}</h1>
        <div className="preview-details-wrapper">
          <p className="">{generalInfo.email}</p>
          <p className="">{generalInfo.phone}</p>
          <p className="">{generalInfo.address}</p>
        </div>
      </div>

      <hr />

      <div className="preview-experience">
        <h2>Experience</h2>
        <p>{experience.companyName}</p>
        <div className="preview-company-details">
          <p className="preview-company-position">{experience.position}</p>
          <p className="preview-company-dates">
            {experience.companyStartDate} ー {experience.companyEndDate}
          </p>
          <p className="preview-company-description">
            {experience.companyDescription}
          </p>
        </div>
      </div>

      <hr />

      <div className="preview-education">
        <h2>Education</h2>
        <p>{education.institutionName}</p>
        <div className="preview-education-details">
          <p className="preview-education-degree">{education.degree}</p>
          <p className="preview-education-dates">
            {education.institutionStartDate} ー {education.institutionEndDate}
          </p>
          <p className="preview-education-description">
            {education.educationDescription}
          </p>
        </div>
      </div>
    </article>
  );
}
