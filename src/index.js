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

  // pressHandler = () => {
  //   this.props.navigation.push('UserDetails');
  // };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.push('UserDetails', {
          name: item.name,
          username: item.username,
          email: item.email,
          addressStreet: item.address.street,
          addressSuite: item.address.suite,
          addressCity: item.address.zipcode,
          addressGeoLat: item.address.geo.lat,
          addressGeoLng: item.address.geo.lng,
          phone: item.phone,
          website: item.website,
          companyName: item.company.name,
          catchPhrase: item.company.catchPhrase,
          bs: item.company.bs,
        })
      }>
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
