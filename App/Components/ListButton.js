import React,{ Component } from 'react'
import { Text,View,Dimensions,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class ListButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white',
    };

  }
  componentDidUpdate(){
    if(this.props.question_type_id.length == 0 && this.state.backgroundColor!=='white'){
        this.setState({backgroundColor:'white'})
    }
  }
  _onPress(){
      this.props.onPressItem(this.props.id,this.props.name)
  }
  render(){
    return (
      <TouchableOpacity onPress={()=>{this._onPress()}} >
         <View style={{margin:10,alignItems: "center",justifyContent:'center', backgroundColor:this.state.backgroundColor,height:50,width:this.props.width,borderRadius:25}}>
           <Text>
            {this.props.name}
           </Text>
         </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  question_type_id:state.questions.questionTypeId
  });
export default connect(
  mapStateToProps,
  null
)(ListButton);
