import React from "react";
import ReactCountTimer from "../../../../react-count-timer/dist";
import "./ReactCounterTimer.css";

const DEFAULT_COUNT = 500;
const DEFAULT_DURATION = 1500;
const { useState } = React;

const App = () => {
  const [form, setForm] = useState({
    count: DEFAULT_COUNT,
    duration: DEFAULT_DURATION,
  });

  const [useDemical, setUseDemical] = useState(false);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [duration, setDuration] = useState(DEFAULT_DURATION);

  const onChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: Number(target.value),
    });
  };

  const onSubmit = () => {
    setCount(form.count);
    setDuration(form.duration);
  };

  return (
    <div className="react-counter-timer">
      <h1>react-count-timer</h1>

      <h2>
        <ReactCountTimer
          className="my-counter"
          count={count}
          duration={duration}
        />
      </h2>

      <section>
        <h3>option</h3>
        <label>
          <input
            type="checkbox"
            checked={useDemical}
            onChange={(e) =>
              setUseDemical((e.target as HTMLInputElement).checked)
            }
          />
          use demical
        </label>
      </section>

      <section>
        <h3>count: {form.count}</h3>
        <input
          type="range"
          name="count"
          step={useDemical ? "0.01" : ""}
          min={-99999}
          max={99999}
          value={form.count}
          onChange={onChange}
        />
      </section>

      <section>
        <h3>duration: {form.duration}</h3>
        <input
          type="range"
          name="duration"
          step={500}
          max={10000}
          value={form.duration}
          onChange={onChange}
        />
      </section>

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default App;
