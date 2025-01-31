import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavaModeTitle } from "@/Constant";
import { TypScriptData } from "@/Data/Miscellaneous/Editor/Editor";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

export const JavaMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={JavaModeTitle} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={TypScriptData} language="Java">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
