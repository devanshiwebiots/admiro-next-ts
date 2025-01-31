"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { Ecommerce, Invoice } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const InvoiceSixContainer = () => {
     const contentRef = useRef<HTMLDivElement | null>(null);
  
     const handlePrint = useReactToPrint({
       contentRef,
     });
  return (
    <>
      <Breadcrumbs mainTitle={`${Invoice}-6`} parent={Ecommerce} />
      <Container>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="invoice" ref={contentRef}>
                  <div>
                    <InvoiceSixHeader />
                    <hr />
                    <UserDetails />
                    <InvoiceSixTable />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <InvoiceButtons handlePrint={handlePrint} />
    </>
  );
};

export default InvoiceSixContainer;
