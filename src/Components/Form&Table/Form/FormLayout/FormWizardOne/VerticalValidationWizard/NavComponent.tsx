import { VerticalWizardTabData } from "@/Data/Form&Table/Form/FormLayout";
import { VerticalFormPropsType } from "@/Types/FormType";
import { Nav, NavItem, NavLink } from "reactstrap";


const NavComponent :React.FC<VerticalFormPropsType> = ({ callbackActive,activeTab }) => {
  return (
    <Nav className="flex-column header-vertical-wizard">
      {VerticalWizardTabData.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={activeTab === index+1 ? "active" : ""} onClick={() => {callbackActive(index + 1)}}>
            <div className="vertical-wizard">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconClassName}`} />
              </div>
              <div className="vertical-wizard-content">
                <h5 className="f-w-600">{data.title}</h5>
                <p>{data.titleInforMation}</p>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
