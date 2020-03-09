import React, { Component } from "react";
import { Container, Header, Content, Footer, Tabs, Tab, FooterTab, Button, Icon, Text } from 'native-base';
import Page1 from "./screens/tabs/Page1";
import Page2 from "./screens/tabs/Page2";
import Page3 from "./screens/tabs/Page3";

export default class TabScreen extends Component {

  render() {
    return (
      <Container>
        <Content></Content>
        <Footer>
          <Tabs>
            <Tab heading="Device Alerts">
                <Page1/>
            </Tab>
            <Tab heading="Device Info">
                <Page2/>
            </Tab>
            <Tab heading="Settings">
                <Page3/>
            </Tab>
          </Tabs>
        </Footer>
      </Container>
    );
  }

}