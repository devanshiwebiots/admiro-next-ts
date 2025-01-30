import { Href, ImagePath } from "@/Constant";
import { CustomCellInterFace, ScrollImageType, ScrollVerticalType, StateSavingTableDataType, TableActionType, TableActionTypes, ZeroConfigurationTableColumnsType } from "@/Types/TableType";
import Image from "next/image";
import { Badge } from "reactstrap";

export const ZeroConfigurationData = [
  { id: 1, name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008/11/28", salary: "$162,700", action: "t-1" },
  { id: 2, name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009/01/12", salary: "$86,000", action: "t-2" },
  { id: 3, name: "Brielle WilLIamson", position: "Integration SpeciaLIst", office: "New York", age: 61, startDate: "2012/12/02", salary: "$372,000", action: "t-3" },
  { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012/03/29", salary: "$433,060", action: "t-4" },
  { id: 5, name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: 36, startDate: "2008/10/16", salary: "$470,600", action: "t-5" },
  { id: 6, name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39, startDate: "2009/09/15", salary: "$205,500", action: "t-6" },
  { id: 7, name: "Donna Snider", position: "Customer Support", office: "New York", age: 27, startDate: "2011/01/25", salary: "$112,000", action: "t-7" },
  { id: 8, name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, startDate: "2011/07/25", salary: "$170,750", action: "t-8" },
  { id: 9, name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59, startDate: "2012/08/06", salary: "$137,500", action: "t-9" },
  { id: 10, name: "Jena Gaines", position: "Office Manager", office: "London", age: 30, startDate: "2008/12/19", salary: "$90,560", action: "t-10" },
  { id: 11, name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: 22, startDate: "2013/03/03", salary: "$342,000", action: "t-11" },
  { id: 12, name: "Rhona Davidson", position: "Integration SpeciaLIst", office: "Tokyo", age: 55, startDate: "2010/10/14", salary: "$327,900", action: "t-12" },
  { id: 13, name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23, startDate: "2008/12/13", salary: "$103,600", action: "t-13" },
  { id: 14, name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, startDate: "2011/04/25", salary: "$320,800", action: "t-14" },
];

const TableAction = ({ id }: TableActionType) => (
  <ul className="action" id={id}>
    <li className="edit">
      <a href={Href}>
        <i className="icon-pencil-alt" />
      </a>
    </li>
    <li className="delete">
      <a href={Href}>
        <i className="icon-trash" />
      </a>
    </li>
  </ul>
);
export const ZeroConfigurationColumn = [
  { name: "Name", selector: (row: ZeroConfigurationTableColumnsType) => row["name"], sortable: true },
  { name: "Position", selector: (row: ZeroConfigurationTableColumnsType) => `${row.position}`, sortable: true },
  { name: "Office", selector: (row: ZeroConfigurationTableColumnsType) => `${row.office}`, sortable: true },
  { name: "Age", selector: (row: ZeroConfigurationTableColumnsType) => `${row.age}`, sortable: true },
  { name: "Start Date", selector: (row: ZeroConfigurationTableColumnsType) => row["startDate"], sortable: true },
  { name: "Salary", selector: (row: ZeroConfigurationTableColumnsType) => `${row.salary}`, sortable: true },
  { name: "Action", cell: (row: ZeroConfigurationTableColumnsType) => <TableAction id={row.action} /> },
];

export const StateSavingDataList = [
  { id: 1, name: "Tiger Nixon", position: "Accountant", color: "secondary", office: "Edinburgh", age: "61", startDate: "2011/04/25", salary: "$320,800", action: "tr-1" },
  { id: 2, name: "Garrett Winters", position: "Accountant", color: "secondary", office: "Tokyo", age: "63", startDate: "2011/07/25", salary: "$170,750", action: "tr-2" },
  { id: 3, name: "Ashton Cox", position: "Junior Technical Author", color: "primary", office: "San Francisco", age: "66", startDate: "2009/01/12", salary: "$86,000", action: "tr-3" },
  { id: 4, name: "Cedric Kelly", position: "Senior Javascript Developer", color: "primary", office: "Edinburgh", age: "22", startDate: "2012/03/29", salary: "$433,060", action: "tr-4" },
  { id: 5, name: "Airi Satou", position: "Accountant", color: "secondary", office: "Tokyo", age: "33", startDate: "2008/11/28", salary: "$162,700", action: "tr-5" },
  { id: 6, name: "Brielle WilLIamson", position: "Integration SpeciaLIst", color: "info", office: "New York", age: "61", startDate: "2012/12/02", salary: "$372,000", action: "tr-6" },
  { id: 7, name: "Herrod Chandler", position: "Sales Assistant", color: "primary", office: "San Francisco", age: "59", startDate: "2012/08/06", salary: "$137,500", action: "tr-7" },
  { id: 8, name: "Rhona Davidson", position: "Integration SpeciaLIst", color: "info", office: "Tokyo", age: "55", startDate: "2010/10/14", salary: "$327,900", action: "tr-8" },
  { id: 9, name: "Colleen Hurst", position: "Javascript Developer", color: "danger", office: "San Francisco", age: "39", startDate: "2009/09/15", salary: "$205,500", action: "tr-9" },
  { id: 10, name: "Sonya Frost", position: "Software Engineer", color: "success", office: "Edinburgh", age: "23", startDate: "2008/12/13", salary: "$103,600", action: "tr-10" },
  { id: 11, name: "Jena Gaines", position: "Office Manager", color: "primary", office: "London  ", age: "30 ", startDate: "2008/12/19 ", salary: "$90,560 ", action: "tr-11" },
  { id: 12, name: "Quinn Flynn", position: "Support Lead", color: "primary", office: "Edinburgh", age: "22", startDate: "2013/03/03", salary: "$342,000", action: "tr-12" },
  { id: 13, name: "Charde Marshall", position: "Regional Director", color: "info", office: "San Francisco", age: "36", startDate: "2008/10/16", salary: "$470,600", action: "tr-13" },
  { id: 14, name: "Haley Kennedy", position: "Senior Marketing Designer", color: "primary", office: "London", age: "43", startDate: "2012/12/18", salary: "$313,500", action: "tr-14" },
  { id: 15, name: "Tatyana Fitzpatrick", position: "Regional Director", color: "info", office: "London", age: "19", startDate: "2010/03/17", salary: "$385,750", action: "tr-15" },
  { id: 16, name: "Michael Silva", position: "Marketing Designer", color: "primary", office: "London", age: "66", startDate: "2012/11/27", salary: "$198,500", action: "tr-16" },
  { id: 17, name: "PaUL Byrd", position: "Chief Financial Officer (CFO)", color: "primary", office: "New York", age: "64", startDate: "2010/06/09", salary: "$725,000", action: "tr-17" },
  { id: 18, name: "Gloria Little", position: "Systems Administrator", color: "primary", office: "New York", age: "59", startDate: "2009/04/10", salary: "$237,500", action: "tr-18" },
  { id: 19, name: "Bradley Greer", position: "Software Engineer", color: "success", office: "London", age: "41", startDate: "2012/10/13", salary: "$132,000", action: "tr-19" },
  { id: 20, name: "Dai Rios", position: "Personnel Lead", color: "primary", office: "Edinburgh", age: "35", startDate: "2012/09/26", salary: "$217,500", action: "tr-20" },
  { id: 21, name: "Jenette Caldwell", position: "Development Lead", color: "primary", office: "New York", age: "30", startDate: "2011/09/03", salary: "$345,000", action: "tr-21" },
  { id: 22, name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", color: "primary", office: "New York", age: "40", startDate: "2009/06/25", salary: "$675,000", action: "tr-22" },
  { id: 23, name: "Caesar Vance", position: "Pre-Sales Support", color: "primary", office: "New York", age: "21", startDate: "2011/12/12", salary: "$106,450", action: "tr-23" },
  { id: 24, name: "Doris Wilder", position: "Sales Assistant", color: "primary", office: "Sidney", age: "23", startDate: "2010/09/20", salary: "$85,600", action: "tr-24" },
  { id: 25, name: "AngeLIca Ramos", position: "Chief Executive Officer (CEO)", color: "primary", office: "London", age: "47", startDate: "2009/10/09", salary: "$1,200,000", action: "tr-25" },
  { id: 26, name: "Gavin Joyce", position: "Developer", color: "success", office: "Edinburgh", age: "42", startDate: "2010/12/22", salary: "$92,575", action: "tr-26" },
  { id: 27, name: "Jennifer Chang", position: "Regional Director", color: "info", office: "Singapore", age: "28", startDate: "2010/11/14", salary: "$357,650", action: "tr-27" },
  { id: 28, name: "Brenden Wagner", position: "Software Engineer", color: "successs", office: "San Francisco", age: "28", startDate: "2011/06/07", salary: "$206,850", action: "tr-28" },
  { id: 29, name: "Fiona Green", position: "Chief Operating Officer (COO)", color: "primary", office: "San Francisco", age: "48", startDate: "2010/03/11", salary: "$850,000", action: "tr-29" },
  { id: 30, name: "Shou Itou", position: "Regional Marketing", color: "primary", office: "Tokyo", age: "20", startDate: "2011/08/14", salary: "$163,000", action: "tr-30" },
  { id: 31, name: "Michelle House", position: "Integration SpeciaLIst", color: "info", office: "Sidney", age: "37", startDate: "2011/06/02", salary: "$95,400", action: "tr-31" },
  { id: 32, name: "Suki Burks", position: "Developer", color: "success", office: "London", age: "53", startDate: "2009/10/22", salary: "$114,500", action: "tr-32" },
  { id: 33, name: "Prescott Bartlett", position: "Technical Author", color: "primary", office: "London", age: "27", startDate: "2011/05/07", salary: "$145,000", action: "tr-33" },
  { id: 34, name: "Gavin Cortez", position: "Team Leader", color: "primary", office: "San Francisco", age: "22", startDate: "2008/10/26", salary: "$235,500", action: "tr-34" },
  { id: 35, name: "Martena Mccray", position: "Post-Sales support", color: "primary", office: "Edinburgh", age: "46", startDate: "2011/03/09", salary: "$324,050", action: "tr-35" },
  { id: 36, name: "Unity Butler", position: "Marketing Designer", color: "primary", office: "San Francisco", age: "47", startDate: "2009/12/09", salary: "$85,675", action: "tr-36" },
  { id: 37, name: "Howard Hatfield", position: "Office Manager", color: "primary", office: "San Francisco", age: "51", startDate: "2008/12/16", salary: "$164,500", action: "tr-37" },
  { id: 38, name: "Hope Fuentes", position: "Secretary", color: "primary", office: "San Francisco", age: "41", startDate: "2010/02/12", salary: "$109,850", action: "tr-38" },
  { id: 39, name: "Vivian Harrell", position: "Financial Controller", color: "primary", office: "San Francisco", age: "62", startDate: "2009/02/14", salary: "$452,500", action: "tr-39" },
  { id: 40, name: "Timothy Mooney", position: "Office Manager", color: "primary", office: "London", age: "37", startDate: "2008/12/11", salary: "$136,200", action: "tr-40" },
  { id: 41, name: "Jackson Bradshaw", position: "Director", color: "primary", office: "New York", age: "65", startDate: "2008/09/26", salary: "$645,750", action: "tr-41" },
  { id: 42, name: "OLIvia Liang", position: "Support Engineer", color: "primary", office: "Singapore", age: "64", startDate: "2011/02/03", salary: "$234,500", action: "tr-42" },
  { id: 43, name: "Bruno Nash", position: "Software Engineer", color: "success", office: "London", age: "38", startDate: "2011/05/03", salary: "$163,500", action: "tr-43" },
  { id: 44, name: "Sakura Yamamoto", position: "Support Engineer", color: "primary", office: "Tokyo", age: "37", startDate: "2009/08/19", salary: "$139,575", action: "tr-44" },
  { id: 45, name: "Thor Walton", position: "Developer", color: "primary", office: "New York", age: "61", startDate: "2013/08/11", salary: "$98,540", action: "tr-45" },
  { id: 46, name: "Finn Camacho", position: "Support Engineer", color: "primary", office: "San Francisco", age: "<td>47</td>", startDate: "2009/07/07", salary: "$87,500", action: "tr-46" },
  { id: 47, name: "Serge Baldwin", position: "Data Coordinator", color: "primary", office: "Singapore", age: "64", startDate: "2012/04/09", salary: "$138,575", action: "tr-47" },
  { id: 48, name: "Zenaida Frank", position: "Software Engineer", color: "success", office: "New York", age: "63", startDate: "2010/01/04", salary: "$125,250", action: "tr-48" },
  { id: 49, name: "Zorita Serrano", position: "Software Engineer", color: "success", office: "San Francisco", age: "56", startDate: "2012/06/01", salary: "$115,000", action: "tr-49" },
  { id: 50, name: "Jennifer Acosta", position: "Junior Javascript Developer", color: "primary", office: "Edinburgh", age: "43", startDate: "2013/02/01", salary: "$75,650", action: "tr-50" },
  { id: 51, name: "Cara Stevens", position: "Sales Assistant", color: "primary", office: "New York", age: "46", startDate: "2011/12/06", salary: "$145,600", action: "tr-51" },
  { id: 52, name: "Hermione Butler", position: "Regional Director", color: "info", office: "London", age: "47", startDate: "2011/03/21", salary: "$356,250", action: "tr-52" },
  { id: 53, name: "Lael Greer", position: "Systems Administrator", color: "primary", office: "London", age: "21", startDate: "2009/02/27", salary: "$103,500", action: "tr-53" },
  { id: 54, name: "Jonas Alexander", position: "Developer", color: "success", office: "San Francisco", age: "30", startDate: "2010/07/14", salary: "$86,500", action: "tr-54" },
  { id: 55, name: "Shad Decker", position: "Regional Director", color: "info", office: "Edinburgh", age: "51", startDate: "2008/11/13", salary: "$183,000", action: "tr-55" },
  { id: 56, name: "Michael Bruce", position: "Javascript Developer", color: "danger", office: "Singapore", age: "29", startDate: "2011/06/27", salary: "$183,000", action: "tr-56" },
  { id: 57, name: "Donna Snider", position: "Customer Support", color: "primary", office: "New York", age: "27", startDate: "2011/01/25", salary: "$112,000", action: "tr-57" },
];

const CustomBadge: React.FC<CustomCellInterFace> = ({ position, color }) => (
  <Badge pill color={`light-${color}`} className={`txt-${color}`}>
    {position}
  </Badge>
);

const TableActions: React.FC<TableActionTypes> = ({ id }) => (
  <ul className="action" id={id}>
    <li className="edit">
      <a href={Href}>
        <i className="icon-pencil-alt" />
      </a>
    </li>
    <li className="delete">
      <a href={Href}>
        <i className="icon-trash" />
      </a>
    </li>
  </ul>
);

export const StateSavingColumns = [
  { name: "Name", selector: (row: StateSavingTableDataType) => row["name"], sortable: true },
  { name: "Position", selector: (row: StateSavingTableDataType) => `${row.position}`, cell: (row: StateSavingTableDataType) => <CustomBadge color={row.color} position={row.position} />, sortable: true },
  { name: "Office", selector: (row: StateSavingTableDataType) => `${row.office}`, sortable: true },
  { name: "Age", selector: (row: StateSavingTableDataType) => `${row.age}`, sortable: true },
  { name: "Start Date", selector: (row: StateSavingTableDataType) => row["startDate"], sortable: true },
  { name: "Salary", selector: (row: StateSavingTableDataType) => `${row.salary}`, sortable: true },
  { name: "Action", cell: (row: StateSavingTableDataType) => <TableActions id={row.action} /> },
];

export const ScrollVerticalData = [
  { name: "user/1.jpg", title: "Zorita Serrano", position: "Software Engineer", office: "San Francisco", age: "56", startDate: "2012/06/01", salary: "$115,000", action: "ts-1" },
  { name: "user/12.png", title: "Zenaida Frank", position: "Software Engineer", office: "New York", age: "63", startDate: "2010/01/04", salary: "$125,250", action: "ts-2" },
  { name: "user/2.jpg", title: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: "40", startDate: "2009/06/25", salary: "$675,000", action: "ts-3" },
  { name: "user/2.jpg", title: "Vivian Harrell", position: "Financial Controller", office: "San Francisco", age: "62", startDate: "2009/02/14", salary: "$452,500", action: "ts-4" },
  { name: "user/12.png", title: "Unity Butler", position: "Marketing Designer", office: "San Francisco", age: "47", startDate: "2009/12/09", salary: "$85,675", action: "ts-5" },
  { name: "user/12.png", title: "Timothy Mooney", position: "Office Manager", office: "London", age: "37", startDate: "2008/12/11", salary: "$136,200", action: "ts-6" },
  { name: "user/1.jpg", title: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: "61", startDate: "2011/04/25", salary: "$320,800", action: "ts-7" },
  { name: "user/1.jpg", title: "Thor Walton", position: "Developer", office: "New York", age: "61", startDate: "2013/08/11", salary: "$98,540", action: "ts-8" },
  { name: "user/2.jpg", title: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: "19", startDate: "2010/03/17", salary: "$385,750", action: "ts-9" },
  { name: "user/12.png", title: "Suki Burks", position: "Developer", office: "London", age: "53", startDate: "2009/10/22", salary: "$114,500", action: "ts-10" },
  { name: "user/2.png", title: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: "23", startDate: "2008/12/13", salary: "$103,600", action: "ts-11" },
  { name: "user/2.png", title: "Shou Itou", position: "Regional Marketing", office: "Tokyo", age: "20", startDate: "2011/08/14", salary: "$163,000", action: "ts-12" },
  { name: "user/2.jpg", title: "Shad Decker", position: "Regional Director", office: "Edinburgh", age: "51", startDate: "2008/11/13", salary: "$183,000", action: "ts-13" },
  { name: "user/2.jpg", title: "Serge Baldwin", position: "Data Coordinator", office: "Singapore", age: "64", startDate: "2012/04/09", salary: "$138,575", action: "ts-14" },
  { name: "user/12.png", title: "Sakura Yamamoto", position: "Support Engineer", office: "Tokyo", age: "37", startDate: "2009/08/19", salary: "$139,575", action: "ts-15" },
  { name: "user/12.png", title: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: "55", startDate: "2010/10/14", salary: "$327,900", action: "ts-16" },
  { name: "user/12.png", title: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: "22", startDate: "2013/03/03", salary: "$342,000", action: "ts-17" },
  { name: "user/1.jpg", title: "Prescott Bartlett", position: "Technical Author", office: "London", age: "27", startDate: "2011/05/07", salary: "$145,000", action: "ts-18" },
  { name: "user/1.jpg", title: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: "64", startDate: "2010/06/09", salary: "$725,000", action: "ts-19" },
  { name: "user/2.jpg", title: "Olivia Liang", position: "Support Engineer", office: "Singapore", age: "64", startDate: "2011/02/03", salary: "$234,500", action: "ts-20" },
  { name: "user/2.jpg", title: "Michelle House", position: "Integration Specialist", office: "Sidney", age: "37", startDate: "2011/06/02", salary: "$95,400", action: "ts-21" },
  { name: "user/12.png", title: "Michael Silva", position: "Marketing Designer", office: "London", age: "66", startDate: "2012/11/27", salary: "$198,500", action: "ts-22" },
  { name: "user/12.png", title: "Michael Bruce", position: "Javascript Developer", office: "Singapore", age: "29", startDate: "2011/06/27", salary: "$183,000", action: "ts-23" },
  { name: "user/2.jpg", title: "Martena Mccray", position: "Post-Sales support", office: "Edinburgh", age: "46", startDate: "2011/03/09", salary: "$324,050", action: "ts-24" },
  { name: "user/1.jpg", title: "Lael Greer", position: "Systems Administrator", office: "London", age: "21", startDate: "2009/02/27", salary: "$103,500", action: "ts-25" },
  { name: "user/2.png", title: "Jonas Alexander", position: "Developer", office: "San Francisco", age: "30", startDate: "2010/07/14", salary: "$86,500", action: "ts-26" },
  { name: "user/2.jpg", title: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: "28", startDate: "2010/11/14", salary: "$357,650", action: "ts-27" },
  { name: "user/2.png", title: "Jennifer Acosta", position: "Junior Javascript Developer", office: "Edinburgh", age: "43", startDate: "2013/02/01", salary: "$75,650", action: "ts-28" },
  { name: "user/2.jpg", title: "Jenette Caldwell", position: "Development Lead", office: "New York", age: "30", startDate: "2011/09/03", salary: "$345,000", action: "ts-29" },
  { name: "user/2.jpg", title: "Jena Gaines", position: "Office Manager", office: "London", age: "30", startDate: "2008/12/19", salary: "$90,560", action: "ts-30" },
  { name: "user/1.jpg", title: "Jackson Bradshaw", position: "Director", office: "New York", age: "65", startDate: "2008/09/26", salary: "$645,750", action: "ts-31" },
  { name: "user/1.jpg", title: "Howard Hatfield", position: "Office Manager", office: "San Francisco", age: "51", startDate: "2008/12/16", salary: "$164,500", action: "ts-32" },
  { name: "user/2.png", title: "Hope Fuentes", position: "Secretary", office: "San Francisco", age: "41", startDate: "2010/02/12", salary: "$109,850", action: "ts-33" },
  { name: "user/2.png", title: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: "59", startDate: "2012/08/06", salary: "$137,500", action: "ts-34" },
  { name: "user/12.png", title: "Hermione Butler", position: "Regional Director", office: "London", age: "47", startDate: "2011/03/21", salary: "$356,250", action: "ts-35" },
  { name: "user/2.png", title: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: "43", startDate: "2012/12/18", salary: "$313,500", action: "ts-36" },
  { name: "user/2.png", title: " Gloria Little", position: "Systems Administrator", office: "New York", age: "59", startDate: "2009/04/10", salary: "$237,500", action: "ts-37" },
  { name: "user/2.png", title: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: "42", startDate: "2010/12/22", salary: "$92,575", action: "ts-38" },
  { name: "user/2.png", title: "Gavin Cortez", position: "Team Leader", office: "San Francisco", age: "22", startDate: "2008/10/26", salary: "$235,500", action: "ts-39" },
  { name: "user/2.png", title: "Garrett Winters", position: "Accountant", office: "Tokyo", age: "63", startDate: "2011/07/25", salary: "$170,750", action: "ts-40" },
  { name: "user/1.jpg", title: " Fiona Green", position: "Chief Operating Officer (COO)", office: "San Francisco", age: "48", startDate: "2010/03/11", salary: "$850,000", action: "ts-41" },
  { name: "user/2.png", title: "Finn Camacho", position: "Support Engineer", office: "San Francisco", age: "47", startDate: "2009/07/07", salary: "$87,500", action: "ts-42" },
  { name: "user/1.jpg", title: "Doris Wilder", position: "Sales Assistant", office: "Sidney", age: "23", startDate: "2010/09/20", salary: "$85,600", action: "ts-43" },
  { name: "user/2.png", title: "Donna Snider", position: "Customer Support", office: "New York", age: "27", startDate: "2011/01/25", salary: "$112,000", action: "ts-44" },
  { name: "user/12.png", title: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: "35", startDate: "2012/09/26", salary: "$217,500", action: "ts-45" },
  { name: "user/1.jpg", title: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: "39", startDate: "2009/09/15", salary: "$205,500", action: "ts-46" },
  { name: "user/1.jpg", title: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: "36", startDate: "2008/10/16", salary: "$470,600", action: "ts-47" },
  { name: "user/12.png", title: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: "22", startDate: "2012/03/29", salary: "$433,060", action: "ts-48" },
  { name: "user/2.jpg", title: "Cara Stevens", position: "Sales Assistant", office: "New York", age: "46", startDate: "2011/12/06", salary: "$145,600", action: "ts-49" },
  { name: "user/12.png", title: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: "21", startDate: "2011/12/12", salary: "$106,450", action: "ts-50" },
  { name: "user/2.png", title: "Bruno Nash", position: "Software Engineer", office: "London", age: "38", startDate: "2011/05/03", salary: "$163,500", action: "ts-51" },
  { name: "user/2.png", title: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: "61", startDate: "2012/12/02", salary: "$372,000", action: "ts-52" },
  { name: "user/12.png", title: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: "28", startDate: "2011/06/07", salary: "$206,850", action: "ts-53" },
  { name: "user/2.jpg", title: "Bradley Greer", position: "Software Engineer", office: "London", age: "41", startDate: "2012/10/13", salary: "$132,000", action: "ts-54" },
  { name: "user/2.jpg", title: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: "66", startDate: "2009/01/12", salary: "$86,000", action: "ts-55" },
  { name: "user/2.png", title: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: "47", startDate: "2009/10/09", salary: "$1,200,000", action: "ts-56" },
  { name: "user/1.jpg", title: "Airi Satou", position: "Accountant", office: "Tokyo", age: "33", startDate: "2008/11/28", salary: "$162,700", action: "ts-57" },
];

const ScrollImage: React.FC<ScrollImageType> = ({ image, title }) => (
  <>
    <Image width={32} height={32} className="img-fluid table-avtar" src={`${ImagePath}/${image}`} alt="userImage" /> {title}
  </>
);
const TableAction1: React.FC<TableActionType> = ({ id }) => (
  <ul className="action" id={id}>
    <li className="edit">
      <a href={Href}>
        <i className="icon-pencil-alt" />
      </a>
    </li>
    <li className="delete">
      <a href={Href}>
        <i className="icon-trash" />
      </a>
    </li>
  </ul>
);

export const ScrollVerticalColumns = [
  { name: "Name", selector: (row: ScrollVerticalType) => `${row.title}`, cell: (row: ScrollVerticalType) => <ScrollImage image={row.name} title={row.title} />, sortable: true },
  { name: "Position", selector: (row: ScrollVerticalType) => `${row.position}`, sortable: true },
  { name: "Office", selector: (row: ScrollVerticalType) => `${row.office}`, sortable: true },
  { name: "Age", selector: (row: ScrollVerticalType) => `${row.age}`, sortable: true },
  { name: "Start Date", selector: (row: ScrollVerticalType) => `${row.startDate}`, sortable: true },
  { name: "Salary", selector: (row: ScrollVerticalType) => `${row.salary}`, sortable: true },
  { name: "Action", cell: (row: ScrollVerticalType) => <TableAction1 id={row.action} /> },
];
