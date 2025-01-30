import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Basic, BasicInputGroupsTitle, Wrapping, YourVanityUrl } from "@/Constant";
import { BasicInputGroupsSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";

export const BasicInputGroups = () => {
  return (
    <Col xl="6" className="mb-lg-3">
      <Card>
        <CommonCardHeader title={BasicInputGroupsTitle} span={BasicInputGroupsSubTitle} />
        <CardBody>
          <Row className="g-3">
            <Col md="12" >
              <div className="card-wrapper border rounded-3 main-custom-form input-group-wrapper">
                <h6 className="sub-title fw-bold">{Basic}</h6>
                <InputGroup>
                  <InputGroupText>{"@"}</InputGroupText>
                  <Input type="text" placeholder="Username" />
                </InputGroup>
                <InputGroup className="custom-validation">
                  <Input type="text" placeholder="Recipient's username" />
                  <InputGroupText>{"@example.com"}</InputGroupText>
                </InputGroup>
                <Label htmlFor="basic-url">{YourVanityUrl}</Label>
                <InputGroup>
                  <InputGroupText>{"https://example.com/"}</InputGroupText>
                  <Input type="text" />
                </InputGroup>
                <InputGroup>
                  <InputGroupText>{"$"}</InputGroupText>
                  <Input type="text" />
                  <InputGroupText>{".00"}</InputGroupText>
                </InputGroup>
                <InputGroup>
                  <Input type="text" placeholder="Username" />
                  <InputGroupText>{"@"}</InputGroupText>
                  <Input type="text" placeholder="Server" />
                </InputGroup>
                <InputGroup>
                  <InputGroupText>{"With textarea"}</InputGroupText>
                  <Input type="textarea" />
                </InputGroup>
              </div>
            </Col>
            <Col xs="12">
              <div className="card-wrapper border rounded-3 input-radius wrapping-input">
                <h6 className="sub-title fw-bold">{Wrapping} </h6>
                <p className="mb-1 mb-0">{"Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with "}<code>{".flex-nowrap"}</code>.</p>
                <InputGroup className="flex-nowrap">
                  <InputGroupText>{"@"}</InputGroupText>
                  <Input type="text" placeholder="Username" />
                </InputGroup>
              </div>
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter color1="primary" color2="light" btn2Class="text-dark" />
      </Card>
    </Col>
  );
};
