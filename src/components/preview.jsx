export default Preview;

function Preview({
  fullName,
  email,
  phone,
  address,
  companyName,
  position,
  companyStartDate,
  companyEndDate,
  companyDescription,
  institutionName,
  degree,
  institutionStartDate,
  institutionEndDate,
  educationDescription,
}) {
  return (
    <article className="cv-sheet">
      <div className="preview-general-info">
        <h1>{fullName} John Doe</h1>
        <div className="preview-details-wrapper">
          <p className="">{email}</p>
          <p className="">{phone}</p>
          <p className="">{address}</p>
        </div>
      </div>

      <hr />

      <div className="preview-experience">
        <h2>Experience</h2>
        <p>{companyName}</p>
        <div className="preview-company-details">
          <p className="preview-company-position">{position}</p>
          <p className="preview-company-dates">
            {companyStartDate} ー {companyEndDate}
          </p>
          <p className="preview-company-description">{companyDescription}</p>
        </div>
      </div>

      <hr />

      <div className="preview-education">
        <h2>Education</h2>
        <p>{institutionName}</p>
        <div className="preview-education-details">
          <p className="preview-education-degree">{degree}</p>
          <p className="preview-education-dates">
            {institutionStartDate} ー {institutionEndDate}
          </p>
          <p className="preview-education-description">
            {educationDescription}
          </p>
        </div>
      </div>
    </article>
  );
}
