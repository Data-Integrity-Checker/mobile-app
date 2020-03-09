import React, { Component } from "react";
import { Container, Header, Content, Footer, Tabs, Tab, TabHeading, FooterTab, Button, Icon, Text } from 'native-base';
import Page1 from "./tabs/Page1";
import Page2 from "./tabs/Page2";
import Page3 from "./tabs/Page3";

export default class TabScreen extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Text></Text>
        </Header>
        <Tabs tabBarPosition="bottom" initialPage={1} style={{marginBottom: "5%"}}>
          <Tab heading={<TabHeading><Icon name="alert" /><Text>Warnings</Text></TabHeading>}>
              <Page1/>
          </Tab>
          <Tab heading={<TabHeading><Icon name="apps" /><Text>Performance</Text></TabHeading>}>
              <Page2/>
          </Tab>
          <Tab heading={<TabHeading><Icon name="settings" /><Text>Settings</Text></TabHeading>}>
              <Page3/>
          </Tab>
        </Tabs>
      </Container>
    );
  }

}