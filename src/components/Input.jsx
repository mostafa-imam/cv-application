export default Input;

function Input({ title, id, name, type, handleChange, value, className }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{title}</label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
}
