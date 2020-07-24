import * as React from "react";
import "./Template.css";

const Submit: React.FC = ({ children }) => (
  <div className="template__submit">{children}</div>
);

interface IProps {
  className?: string;
}

const Template: React.FC<IProps> & { Submit: typeof Submit } = ({
  className,
  children,
}) => <div className={`template ${className}`}>{children}</div>;

Template.Submit = Submit;

export default Template;
