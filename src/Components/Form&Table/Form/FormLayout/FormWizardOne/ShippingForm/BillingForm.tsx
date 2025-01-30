import { ChangeEvent, useState } from "react";
import { Button, Col, Form, Row } from "reactstrap";
import { BillingInformation, FillFollowingInformation, ProceedToNext } from "@/Constant";
import { BillingUserDetails1 } from "./BillingUserDetails1";
import { BillingUserDetail2 } from "./BillingUserDetail2";
import { BillingFormProp } from "@/Types/FormType";
import { toast } from "react-toastify";

const BillingForm: React.FC<BillingFormProp> = ({ callbackActive }) => {
  const [studentValidationForm, setStudentValidationForm] = useState({ firstName: "", lastName: "", contact: "", email: "", address: "", country: "", state: "", zip: "", rememberNextTime: false, otherNotes: "" });
  const { firstName, lastName, contact, email, address, country, state, zip, rememberNextTime, otherNotes } = studentValidationForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setStudentValidationForm({ ...studentValidationForm, [name]: value });
  };
  const handleNextButton = () => {
    if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && address !== "" && country !== "" && state !== "" && zip !== "" && rememberNextTime !== false && otherNotes !== "") callbackActive(2);
    else toast.error("Please fill all field after press next button");
  };

  return (
    <>
      <h5 className="f-w-600">{BillingInformation}</h5>
      <p className="f-light">{FillFollowingInformation}</p>
      <Form onSubmit={(event) => event.preventDefault} className="g-3 needs-validation " noValidate>
        <Row>
          <BillingUserDetails1 studentValidationForm={studentValidationForm} getUserData={getUserData} />
          <BillingUserDetail2 studentValidationForm={studentValidationForm} getUserData={getUserData} />
          <Col xs="12" className="text-end">
            <Button onClick={handleNextButton} color="primary">
              {ProceedToNext}
              <i className="fa fa-truck proceed-next pe-2" />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default BillingForm;
