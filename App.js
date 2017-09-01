import React, {component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import BookList from './components/BookList';
import Detail from './components/Detail';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="BookList" component={BookList} 
            title="List of Books" initial={true}/>
            <Scene key="Detail" component={Detail} title="Detail" />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    //justifyContent: 'center',
    //marginTop: 5
  },
});
