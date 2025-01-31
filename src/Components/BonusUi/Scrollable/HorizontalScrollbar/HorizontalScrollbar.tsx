import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalScrollbarTitle, ImagePath } from "@/Constant";
import { HorizontalScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

export const HorizontalScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={HorizontalScrollbarTitle} span={HorizontalScrollSubTitle} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content scroll-content-width">
              <Row>
                {[...Array(6)].map((_, index) => (
                  <Col xs="2" key={index}>
                    <div className="horizontal-img">
                      <Image width={240} height={360} className="img-fluid" src={`${ImagePath}/scrollbar/fashion${index + 1}.jpg`} alt="girl" />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
