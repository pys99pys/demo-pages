import * as React from "react";
import useFile from "../../../../react-use-file/dist";
import Template from "../Template";
import Headline from "../Headline";
import Section from "../Section";
import "./ReactUseFile.css";

interface IProps {}

const ReactUseFile: React.FC<IProps> = () => {
  const [onSlelect, files, results] = useFile({
    multiple: true,
  });

  return (
    <Template className="react-use-file">
      <Headline prioty={1}>react-use-file</Headline>

      <Template.Submit>
        <button onClick={onSlelect}>Select file</button>
      </Template.Submit>

      <br />
      <br />

      <Section className="preview" title="Preview images">
        {!!results.length ? (
          <ul>
            {results.map((result) => (
              <li key={result}>
                <img src={result} />
              </li>
            ))}
          </ul>
        ) : (
          <div>There is no preview images</div>
        )}
      </Section>

      <br />
      <br />

      <Section title="file names">
        {!!files.length ? (
          files.map((file) => {
            console.log(file);

            return <p key={file.name}>{file.name}</p>;
          })
        ) : (
          <div>There is no files</div>
        )}
      </Section>
    </Template>
  );
};

export default ReactUseFile;
