import * as React from "react";
import Headline from "../Headline";

interface IProps {
  title: string;
}

const Section: React.FC<IProps> = ({ title, children }) => (
  <section className="section">
    <Headline prioty={3}>{title}</Headline>
    {children}
  </section>
);

export default Section;
