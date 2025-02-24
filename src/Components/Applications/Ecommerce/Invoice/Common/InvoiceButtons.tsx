import React from "react";
import Link from "next/link";
import { Cancel, Href, PrintInvoice } from "@/Constant";
import { InvoicePrintType } from "@/Types/EcommerceType";
import { useAppSelector } from "@/Redux/Hooks";

export const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {
  

  return (
    <span style={{display: "flex",justifyContent: "center",gap: 15,}} className="pb-5">
      <Link onClick={handlePrint} style={{background: "#308e87",color: "rgba(255, 255, 255, 1)",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} href={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10,}}/>
      </Link>
      <Link style={{background: "rgba(122, 112, 186, 0.1)",color: "#308e87",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} href={`/ecommerce/product`} download>
        {Cancel}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10,}}/>
      </Link>
    </span>
  );
};