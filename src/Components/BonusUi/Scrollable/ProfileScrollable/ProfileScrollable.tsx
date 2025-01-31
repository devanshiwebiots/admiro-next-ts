import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, ProfileScrollableTitle } from "@/Constant";
import { ProfileScrollData, ProfileScrollSubTitle } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

export const ProfileScrollable = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ProfileScrollableTitle} span={ProfileScrollSubTitle} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup>
              {ProfileScrollData &&
                ProfileScrollData.map((item, index) => (
                  <ListGroupItem action className="list-hover-primary" key={index}>
                    <Image width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="user" />
                    {item.text}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
