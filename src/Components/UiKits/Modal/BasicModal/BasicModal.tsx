import { Card, CardBody, Col } from "reactstrap";
import { AdmiroModal } from "./AdmiroModal";
import { ScrollingModal } from "./ScrollingModal";
import { SimpleModal } from "./SimpleModal";
import { TooltipModal } from "./TooltipModal";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicModalTitle } from "@/Constant";
import { BasicModalSubTitle } from "@/Data/Uikits/Modal";

export const BasicModal = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BasicModalTitle} span={BasicModalSubTitle} />
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <TooltipModal />
          <AdmiroModal />
        </CardBody>
      </Card>
    </Col>
  );
};
