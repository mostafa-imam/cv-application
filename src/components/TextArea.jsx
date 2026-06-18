export default TextArea;

function TextArea({ title, id, size, handleChange, value }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{title}</label>

      <textarea
        name={id}
        id={id}
        onChange={handleChange}
        rows={size}
        cols={size * 3}
        placeholder="description..."
        value={value}
      ></textarea>
    </div>
  );
}
