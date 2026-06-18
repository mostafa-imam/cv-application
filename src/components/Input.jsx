export default Input;

function Input({ title, id, name, type, handleChange, value }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{title}</label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
