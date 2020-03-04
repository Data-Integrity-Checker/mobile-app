import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

const style = styleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

// function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });