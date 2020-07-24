import React from "react";
import ReactCountTimer from "../../../../react-count-timer/dist";
import Template from "../Template";
import Headline from "../Headline";
import Section from "../Section";
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
    <Template className="react-counter-timer">
      <Headline prioty={1}>react-count-timer</Headline>

      <Headline prioty={2}>
        <ReactCountTimer
          className="my-counter"
          count={count}
          duration={duration}
        />
      </Headline>

      <Section title="option">
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
      </Section>

      <Section title={`count: ${form.count}`}>
        <input
          type="range"
          name="count"
          step={useDemical ? "0.01" : ""}
          min={-99999}
          max={99999}
          value={form.count}
          onChange={onChange}
        />
      </Section>

      <Section title={`duration: ${form.duration}`}>
        <input
          type="range"
          name="duration"
          step={500}
          max={10000}
          value={form.duration}
          onChange={onChange}
        />
      </Section>

      <Template.Submit>
        <button onClick={onSubmit}>submit</button>
      </Template.Submit>
    </Template>
  );
};

export default App;
