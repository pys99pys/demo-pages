import * as React from "react";
import Headline from "../Headline";

interface IProps {
  className?: string;
  title: string;
}

const Section: React.FC<IProps> = ({ className, title, children }) => (
  <section className={className}>
    <Headline prioty={3}>{title}</Headline>
    {children}
  </section>
);

export default Section;
