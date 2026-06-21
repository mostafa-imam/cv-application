export default TextArea;

function TextArea({ title, id, name, size, handleChange, value, className }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{title}</label>

      <textarea
        name={name}
        id={id}
        onChange={handleChange}
        rows={size}
        cols={size * 3}
        placeholder="description..."
        value={value}
        className={className}
      />
    </div>
  );
}
