import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BothSideScrollbarTitle } from "@/Constant";
import { BothSideScroll, BothSideScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

export const BothSideScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BothSideScrollbarTitle} span={BothSideScrollSubTitle} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="scroll-demo" style={{ width: "100%", height: "300px" }}>
              <div className="horz-scroll-content scroll-content-width">
                <Row>
                  {BothSideScroll &&
                    BothSideScroll.map((item, index) => (
                      <Col sm="3" key={index}>
                        {item.text}
                      </Col>
                    ))}
                </Row>
              </div>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
