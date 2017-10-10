import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem({item}) {
    return <ListItem library={item}/>
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.props.libraries}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => item.id}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps({libraries}) {
  return {libraries}
}

export default connect(mapStateToProps)(LibraryList);
