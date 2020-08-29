import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import apiCall from './store/ActionCreator';

class ProgrammingAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount() {
    Icon.loadFont();
    this.props
      .apiCall('https://jsonplaceholder.typicode.com/users')
      .then(() => {
        const data = this.props.data;
        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <TouchableOpacity>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiCall: (url) => dispatch(apiCall(url)),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgrammingAssignment);
