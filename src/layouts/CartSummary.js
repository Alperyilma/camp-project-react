import React from 'react';
import { Dropdown, DropdownDivider } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function CartSummary() {
  return <div>
      <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>Acer Laptop</Dropdown.Item>
              <Dropdown.Item>Macbook Laptop</Dropdown.Item>
              <Dropdown.Item>Dell Laptop</Dropdown.Item>
              <DropdownDivider/>
              <Dropdown.Item as={NavLink} to="/cart">Go to Cart!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
  </div>;
}
