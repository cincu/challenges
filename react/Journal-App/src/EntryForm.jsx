import "./index.css";

export function EntryForm() {
  return (
    <form className="entry-form">
      <h3 className="header__semi">New Entry</h3>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input name="motto" id="motto" type="text" />
        </div>
      </div>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="5" />
        </div>
      </div>
      <button className="button" type="submit">
        Create
      </button>
    </form>
  );
}
