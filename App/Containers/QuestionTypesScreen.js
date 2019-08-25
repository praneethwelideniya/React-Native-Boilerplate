import React,{ Component } from 'react'
import { Text,View,Dimensions,FlatList,ScrollView,TouchableOpacity,Alert } from 'react-native'
import ListButton from '../Components/ListButton'
import * as AppAction from '../Actions'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { categories as questionTypes } from "../data.json"
import LinearGradient from 'react-native-linear-gradient'

class QuestionTypesScreen extends Component {

  static navigationOptions = ({ navigation }) => {
        console.log('Navigation Options')
        return {
          header: (
       <View
         style={{
           backgroundColor: 'red',
           justifyContent: 'center',
         }}>
         <Text
           style={{
             color: 'white',
             textAlign: 'center',
             fontWeight: 'bold',
             fontSize: 18,
           }}>
           This is Custom Header
         </Text>
       </View>
     ),
        };
    };


    state = {
      questiontypeId: "",
      username:"",
      width:Dimensions.get('window').width,
      pointerEvents:'auto'
    };

  componentDidMount(){
    this.props.AppAction.clearCommon()
    this.setState({username:this.props.user.userName})
  }
  componentDidUpdate(){
    if(this.props.common.error){
      console.log(this.props.common)
      this.props.AppAction.clearCommon()
      Alert.alert(
        'Error',
        'Something went wrong. Check your internet connection',
      [
        {text: 'OK', onPress: () =>{this.props.navigation.setParams({pointerEvents:'auto'})}},
      ],
      { cancelable: true }
    )
    }
  }
  _keyExtractor = (item, index) => "list_id-"+item.id;

  _onPressItem = (id,name) => {
    this.props.navigation.setParams({pointerEvents:'none'})
    this.props.AppAction.setQuestionTypes('Questions',id,name)
  };

  _renderItem = ({item}) => (
    <ListButton
      id={item.id}
      onPressItem={this._onPressItem}
      name={item.name}
      width={4*(this.state.width/5)}
      onPressChangeEnable={false}
    />
  );
  render() {
    return (
        <View style={{flex: 1}} pointerEvents={this.props.navigation.getParam("pointerEvents")}>
          <LinearGradient
            colors={['#240b36','#c31432']}
            style={{flex: 1}}
            start={{ x: 0.6, y: 0.3 }}
            end={{ x: 0.7, y: 1 }}
            >
          <Text style={{margin:2,textAlign: "center",color:'white', fontSize:20 }} >Hi, {this.state.username}</Text>
          <Text style={{margin:2,textAlign: "center",color:'white',fontSize:20}}>Select question category</Text>
        <View style={{flex: 1,margin:5,alignItems: "center"}}>
          <ScrollView keyboardShouldPersistTaps='always'>
          <FlatList
            data={questionTypes}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
          </ScrollView>
        </View>
      </LinearGradient>
        </View>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  AppAction: bindActionCreators(AppAction, dispatch)
});
const mapStateToProps = state => ({
  user: state.userReducer,
  questions: state.questions,
  common: state.common,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionTypesScreen);
