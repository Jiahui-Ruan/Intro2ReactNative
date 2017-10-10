import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.dataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
  }

  renderList() {
    return this.props.libraries.map(lib => <li>lib</li>)
  }

  render() {
    return(
      <View>
        <ul>
          {this.renderList()}
        </ul>
      </View>
    );
  }
}

function mapStateToProps({libraries}) {
  return {libraries}
}

export default connect(mapStateToProps)(LibraryList);
