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
    <div className="Header">
      <Card
        display="flex"
      >
        <Flex
          orientation="row"
        >
          <FlexItem>
            <Icon/>
          </FlexItem>
          <FlexItem>
            <Icon
              icon="bell"
            />
          </FlexItem>
          <FlexItem>
            <Icon
              icon="inbox"
            />
          </FlexItem>
          <FlexItem>
            <User
              light
              name="Indira Shree"
              orientation="horizontal"
              paddingRight="sm"
            />
            <Icon
              icon="chevron-down"
              size="1x"
            />
          </FlexItem>
        </Flex>
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
