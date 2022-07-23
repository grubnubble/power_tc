/* @flow*/

import React from "react";
import { 
  BreadCrumbs,
  Card,
  Icon,
  Title,
  User
} from "playbook-ui";

export default function Header() {
  return (
    <div className="App">
      <Card>
        <Icon/>
        <User
          align="right"
          light
          name="Indira Shree"
          orientation="horizontal"
          paddingRight="sm"
        />
        <Icon
          align="right"
          dark
          icon="chevron-down"
          marginRight="sm"
          padding="none"
          size="1x"
        />
      </Card>

      <Card>
        <BreadCrumbs
          text="+1"
        >
          <Title
            size="4"
            tag="span"
            text="Dashboard"
            padding="sm"
          />
          <Title
            size="4"
            tag="span"
            text="Products"
            padding="sm"
          />
          <Title
            size="4"
            tag="span"
            text="In Progress"
            padding="sm"
          />
          <Title
            size="4"
            tag="span"
            text="Settings"
            padding="sm"
          />
        </BreadCrumbs>
      </Card>
    </div>
  );
}
