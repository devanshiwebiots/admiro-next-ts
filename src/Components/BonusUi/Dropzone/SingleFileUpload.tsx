import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SingleFileUploads } from "@/Constant";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";

const SingleFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={SingleFileUploads} span={FileUploadData} />
        <CommonFileUpload />
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
