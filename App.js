import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Device Attributes</Text>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Left>
                <Text>
                  Device ID: 1234 {"\n"}
                  Battery: 70% {"\n"}
                  Duplicate Data: 433 {"\n"}
                  Missing Data: 343 {"\n"}
                  GPS Error: 193
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>
                  Device ID: 1235 {"\n"}
                  Battery: 70% {"\n"}
                  Duplicate Data: 433 {"\n"}
                  Missing Data: 343 {"\n"}
                  GPS Error: 193
                </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>
                  Device ID: 1236 {"\n"}
                  Battery: 70% {"\n"}
                  Duplicate Data: 433 {"\n"}
                  Missing Data: 343 {"\n"}
                  GPS Error: 193
                </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
