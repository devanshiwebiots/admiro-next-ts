import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesScrollbarTitle } from "@/Constant";
import { BadgeScrollData, BadgesScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const BadgesScrollbar = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BadgesScrollbarTitle} span={BadgesScrollSubTitle} />
        <CardBody>
          <ScrollBar className="scroll-demo" style={{ width: "100%", height: "300px" }}>
            <ListGroup numbered className="scroll-rtl">
              {BadgeScrollData &&
                BadgeScrollData.map((item, index) => (
                  <ListGroupItem className={`d-flex align-items-start flex-wrap ${index === BadgeScrollData.length - 1 ? "justify-content-between" : ""}`} key={index}>
                    <div className="ms-2 me-auto">{item.text}</div>
                    <Badge color={item.class} className={`p-2 ${index !== 0 ? "text-white" : ""}`} pill>
                      {item.badge}
                    </Badge>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
