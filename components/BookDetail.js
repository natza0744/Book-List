import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Detail from './Detail';

const BookDetail = (props) => {
    const goToDetail = () => Actions.Detail({image: props.book_image,
        title: props.title, des: props.description});
    return (
        <View style={styles.container}>
            <Image source={{uri: props.book_image}} 
            style={styles.image}  resizeMode = "contain" />
            <View>
                <Text style = {styles.subject}>Title:</Text>
                <Text style = {styles.title}>{props.title}</Text>
                <Text style = {styles.subject}>Author:</Text>
                <Text style = {styles.author}>{props.author}</Text>
                <Text onPress={goToDetail}>More Detail </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        height: 150,
        borderBottomWidth: 0.5
    },
    image: {
        height: 150,
        width: 100,
    },
    // description:{
    //     flex: 3,
    //     marginRight: 5
    // },
    subject: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        justifyContent: 'flex-start'
    },
    author: {
        justifyContent: 'flex-start'   
    },
    // read:{
    //     textAlign: 'right',
    // }
  });

export default BookDetail;
