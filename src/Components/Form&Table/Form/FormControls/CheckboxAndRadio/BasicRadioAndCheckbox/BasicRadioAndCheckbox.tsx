import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicRadioAndCheckboxTitle } from "@/Constant";
import { BasicCheckboxRadioData, BasicRadioAndCheckBoxSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";

export const BasicRadioAndCheckbox = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicRadioAndCheckboxTitle} span={BasicRadioAndCheckBoxSubTitle} />
        <CardBody>
          <Row className="g-3">
            {BasicCheckboxRadioData.map((data) => (
              <Col md="12" key={data.id}>
                <div className={`card-wrapper border rounded-3 checkbox-checked ${data.divClass}`}>
                  <h6 className="sub-title">{data.title}</h6>
                  <div className="form-check-size">
                    {data.child.map((item) => (
                      <FormGroup key={item.id} className={item.formGroupClass} check inline>
                        <Input id={`inline-${item.id}`} type={item.type} defaultChecked={item.check ? true : false} name={item.type === "radio" ? item.name : ""} />
                        <Label htmlFor={`inline-${item.id}`} className={item.id === 2 ? "mb-0" : ""} check>
                          {item.text}
                        </Label>
                      </FormGroup>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
