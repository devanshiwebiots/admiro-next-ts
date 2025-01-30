import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalAccordionTitle } from "@/Constant";
import { HorizontalAccordionSubTitle } from "@/Data/Uikits/Accordion";
import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Row } from "reactstrap";

export const HorizontalAccordion=()=> {
  const [open, setOpen] = useState(false);

  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={HorizontalAccordionTitle} span={HorizontalAccordionSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="secondary" onClick={() => setOpen(!open)}>
              {"Toggle width collapse"}
            </Button>
          </div>
          <Row>
            <Col xl="6" xs="9">
              <Collapse isOpen={open} className="mt-3" horizontal>
                <Card>
                  <CardBody className="bg-secondary-light accordion-h-space mb-0">
                    <span>{"The collapse plugin also supports horizontal collapsing. Add the .collapse-horizontal modifier class to transition the width instead of height and set a width on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities."}</span>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
