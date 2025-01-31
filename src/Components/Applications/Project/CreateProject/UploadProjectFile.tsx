import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";
import { UploadProjectFiles } from "@/Constant";
import { Col, FormGroup, Row } from "reactstrap";

const UploadProjectFile = () => {

  return (
    <Row>
      <Col>
        <FormGroup>
          <h5 className="f-w-600 mb-2">{UploadProjectFiles}</h5>
          <CommonFileUpload/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default UploadProjectFile;
