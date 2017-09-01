import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// functional component
/*const Hi = (props) => (
    <Text> Hi {props.name} </Text>
  );*/

class Hi extends React.Component{
constructor(props){
    super(props)
    this.state = { beBold: true };
}
toggleBold = () => {
    let beBold = !this.state.beBold;
    this.setState({beBold});
}

    render(){
        return (
            <Text style = {this.state.beBold ? styles.bold : styles.notBold}
            onPress={this.toggleBold}> Hi {this.props.name}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
    notBold: {
    }
  });
  

export default Hi;