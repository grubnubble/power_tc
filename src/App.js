/* @flow*/

import React from "react";
import { 
  Background,
  Body,
  Caption,
  Card,
  CircleIconButton,
  Flex,
  FlexItem,
  Icon,
  Nav,
  NavItem,
  Title,
  User
} from "playbook-ui";

export default function App() {
  return (
    <div className="App" >
      <Background
        backgroundColor="light"
      >
        <Card
          padding="none"
        >
          <Card
            borderNone
          >
            <Flex
              orientation="row"
              justify="between"
            >
              <FlexItem>
                <Icon/>
              </FlexItem>
              <FlexItem>
                <Flex
                  orientation="row"
                >
                  <Icon
                    icon="bell"
                    marginRight="sm"
                  />
                  <Icon
                    icon="inbox"
                    marginRight="sm"
                  />
                  <User
                    light
                    name="Indira Shree"
                    orientation="horizontal"
                  />
                  <Icon
                    icon="chevron-down"
                    size="1x"
                  />
                </Flex>
              </FlexItem>
            </Flex>
          </Card>

          <Nav
            orientation="horizontal"
            display="sm"
          >
            <NavItem
              text="Dashboard"
              link="#"
            />
            <NavItem
              text="Products"
              link="#"
            />
            <NavItem
              text="In Progress"
              link="#"
            />
            <NavItem
              text="Settings"
              link="#"
            />
          </Nav>
        </Card>

        <div style={{paddingLeft: '17%'}}>
        <Caption
          text="dashboard"
        />
        <Title text="Commerce Dashboard" />
        </div>

        <div style={{paddingLeft: '17%'}}>
        <Card
          maxWidth="xl"
        >
          <CircleIconButton icon="plus" variant="primary" />
        </Card>
        </div>
      </Background>
    </div>
  );
}
