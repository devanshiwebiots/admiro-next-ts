import { Container, Row } from "reactstrap";
import { EditorTitle, CKEditorTitle } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import Editor from "./Editor";
import InlineEditor from "./InlineEditor";

const CKEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CKEditorTitle} parent={EditorTitle} />
      <Container fluid>
        <Row>
          <Editor />
          <InlineEditor />
        </Row>
      </Container>
    </>
  );
};
export default CKEditorContainer;
