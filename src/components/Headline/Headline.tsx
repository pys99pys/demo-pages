import * as React from "react";

interface IProps {
  prioty: 1 | 2 | 3 | 4 | 5 | 6;
}

const Headline: React.FC<IProps> = ({ prioty, children }) => {
  const Tag: any = `h${prioty}`;
  return <Tag className="headline">{children}</Tag>;
};

export default Headline;
