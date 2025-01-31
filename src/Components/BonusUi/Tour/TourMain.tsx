import { Container, Row } from "reactstrap";
import { useEffect } from "react";
import UserProfileFirstStyle from "./UserProfileFirstStyle/UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle/UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle/UserProfileThirdStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle/UserProfileFourthStyle";
import UserProfileFifthStyle from "./UserProfileFifthStyle/UserProfileFifthStyle";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Tour, BonusUi } from "@/Constant";

const TourMain = () => {
 
  return (
    <>
      <Breadcrumbs mainTitle={Tour} parent={BonusUi} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfileFirstStyle />
            <UserProfileSecondStyle />
            <UserProfileThirdStyle />
            <UserProfileFourthStyle />
            <UserProfileFifthStyle />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourMain;
