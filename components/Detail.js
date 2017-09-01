import React, {Component} from 'react';
import { StyleSheet, Text, View ,ListView, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Detail = (props) => (

            <View style={styles.container}>
            
                <Image source={{uri: props.image}} style={styles.image}  resizeMode = "contain" />
                <Text style={styles.subject}>Title</Text>
                <Text style={styles.text}>{props.title}</Text>
                <Text style={styles.subject}>Description</Text>
                <Text style={styles.text}>{props.des}</Text>
    </View>    
)
 
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
        borderBottomWidth: 1.5
      },
      image: {
          marginTop: 5,
          height: 150,
          width: 100
      },
      text:{
          textAlign: 'center'
      },
      subject: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    });

export default Detail;
