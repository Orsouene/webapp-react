export default function Form({ handleSubmit, setFieldValue, formData }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">
        Welcome,
        <br />
        <span>Create your Review </span>
      </div>

      <input
        className="input"
        name="name"
        placeholder="Place your Name.."
        type="text"
        id="name"
        value={formData.name}
        onChange={setFieldValue}
      />
      <textarea
        className="form-control"
        id="text"
        rows="3"
        name="text"
        placeholder="Place your Name.."
        type="text"
        value={formData.text}
        onChange={setFieldValue}
      />
      <input
        className="input"
        name="vote"
        placeholder="Your vote..."
        min={0}
        max={10}
        type="number"
        id="vote"
        value={formData.vote}
        onChange={setFieldValue}
      />
      <button className="button-confirm" type="submit">
        Lets go
      </button>
    </form>
  );
}
