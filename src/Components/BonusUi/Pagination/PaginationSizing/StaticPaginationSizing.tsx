import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "@/Constant";

export const StaticPaginationSizing = () => {
  return (
      <Pagination size="lg" className="pagination-primary pagin-border-info mb-3"> 
        <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
        <PaginationItem active><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
      </Pagination>
  ); 
};
