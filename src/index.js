import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import apiCall from './store/ActionCreator';

class ProgrammingAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => index.toString()}
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
