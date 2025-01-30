import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label } from "reactstrap";

export const DropdownForm = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle caret color="secondary">
          {"Dropdown form"}
        </DropdownToggle>
        <DropdownMenu>
          <Form className="p-3 form-wrapper dark-form">
            <div className="mb-2">
              <Label htmlFor="exampleDropdownFormEmail2">{"Email address"}</Label>
              <Input id="exampleDropdownFormEmail2" type="email" placeholder="email@example.com" />
            </div>
            <div className="mb-2">
              <Label htmlFor="exampleDropdownFormPassword2">{"Password"}</Label>
              <Input id="exampleDropdownFormPassword2" type="password" placeholder="Password" autoComplete="" />
            </div>
            <div className="mb-2">
              <FormGroup check>
                <Input id="dropdownCheck2" type="checkbox" />
                <Label htmlFor="dropdownCheck2" check>
                  {"Remember me"}
                </Label>
              </FormGroup>
            </div>
            <Button color="dark" onClick={toggle}>
              {"Sign in"}
            </Button>
          </Form>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
