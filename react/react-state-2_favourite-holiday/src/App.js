import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    setHoliday(holidayInput);
    setDate(dateInput);
  }
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");

  const [holidayInput, setHolidayInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          value={holidayInput}
          onChange={(event) => setHolidayInput(event.target.value)}
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={dateInput}
          onChange={(event) => setDateInput(event.target.value)}
        />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
