import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CssModeTitle } from "@/Constant";
import { CssData } from "@/Data/Miscellaneous/Editor/Editor";

export const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CssModeTitle} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={CssData} language="css">
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
