import { ImagePath } from "@/Constant";
import { LoginFormProp } from "@/Types/PagesType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CommonLogo: React.FC<LoginFormProp> = ({ logoClass }) => {
  return (
    <Link className={`logo ${logoClass}`} href={`/dashboard/default`}>
      <Image width={91} height={27} className="img-fluid for-light" src={`${ImagePath}/logo/logo1.png`} alt="looginpage" />
      <Image width={91} height={27} className="img-fluid for-dark" src={`${ImagePath}/logo/logo-dark.png`} alt="looginpage" />
    </Link>
  );
};
