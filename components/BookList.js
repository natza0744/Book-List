import React from 'react';
import { StyleSheet, Text, View ,ListView} from 'react-native';
import BookDetail from './BookDetail'
 

const data = [
  {
    "title": "SEEING RED",
    "author": "Sandra Brown",
    "book_image": "https://s1.nyt.com/du/books/images/9781455572106.jpg"
  },
  {
    "title": 	"CAMINO ISLAND",
    "author": "John Grisham",
    "book_image": 	"https://s1.nyt.com/du/books/images/9780385543057.jpg"
  }
];
let book = [{ }]
export default class BookList extends React.Component {
 
  constructor(props){
    super(props)
    let ds =  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {dataSource: ds.cloneWithRows(data)}
  }

  componentWillMount(){
    fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290')
    .then((response) => response.json())
    .then((responseJSON) => {
      book = responseJSON.results.books;
      //console.log(responseJSON)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(book)
      });
    });
  }

  _renderRow(rowData){
    return <BookDetail {...rowData}/>;
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView 
        dataSource={this.state.dataSource} 
        renderRow={this._renderRow}/>
      </View>
      // <View style={styles.container}>
      //   <Text onPress={this.doIt}>Hello world</Text>
      //   <Hi name="Fu"/>
      // </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 40
  },
});