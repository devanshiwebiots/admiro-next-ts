import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavascriptModeTitle } from "@/Constant";
import { JavascriptData } from "@/Data/Miscellaneous/Editor/Editor";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

export const JavascriptMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={JavascriptModeTitle} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={JavascriptData} language="javascript">
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
