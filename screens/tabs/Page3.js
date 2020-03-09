import React, { Component } from "react";
import { Container, Header, Left, Right, Content, Footer, Tabs, Tab, FooterTab, Button, Icon, Text, List, ListItem } from 'native-base';

export default class Page3 extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Text>Settings HEADER</Text>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Text>Option 1</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
                <Text>Option 2</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
            <Left>
                <Text>Option 2</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
  
}