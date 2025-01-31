import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HTMLModeTitle } from "@/Constant";
import { HtmlData } from "@/Data/Miscellaneous/Editor/Editor";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

export const HtmlMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HTMLModeTitle} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={HtmlData} language="HTML">
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
