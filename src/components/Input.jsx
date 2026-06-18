export default Input;

function Input({ title, id, type, handleChange, value }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{title}</label>

      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
