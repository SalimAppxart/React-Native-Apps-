

import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, ScrollView,  TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default class Outgate extends React.Component {
  static navigationOptions = {
    header: null,
  };
//Use swiper on this page while working on second page of Pre-Outgate.
    constructor(props) {
    super(props);
    this.state = {
      //myText: 'Pateint\'s Details, Click on patient name.',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }

  swipe(n) {
    swiper = this.refs.swiper
    if(swiper) swiper.scrollBy(n || 1)
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'UP'});
  }
 
  onSwipeDown(gestureState) {
    this.setState({myText: 'down!'});
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'Left!'});
  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'Right.!'});
  }


  render() {
        const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };


  		return(
  		<View sytle = {styles.container}>
  				 <TouchableOpacity style = {styles.submitbutton}
                    onPress = {
                      () => this.props.navigation.push('Home')
                    }>
                    <Image source = {require('../assets/images/chome.png')} 
                    	style = {styles.chomephoto}
                    ></Image>
                     <Text style = {styles.ingatebutton}> PRE-OUTGATE</Text>
                    <Text style = {styles.textsubmitbutton} >Logout</Text>
                    </TouchableOpacity>
               
               <GestureRecognizer
       // onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style = {styles.keycontainer}

        >   
            <Swiper ref='swiper' style={styles.keycontainer} showsButtons= {false} horizontal={true} loop= {false}
                        dot = {<View style={{ width: 0, height: 0, borderRadius: 4, marginLeft: 4}} />}
                        activeDot = {<View style = {{ width: 0, height: 0}} />}  >
                  

              <View style = {styles.keycontainer}>
                <View style = {styles.textwithimage} >
                <Image source = {require('../assets/images/ticon.png')} 
                        style = {styles.textimagestyle} ></Image>
                  <TextInput style = {styles.inputbox}
                       placeholder = 'Truck License'
                       autoCapitalize = 'none'
                       onChangeText = {this.handle}
                       keyboardType = 'numeric'
                       placeholderColor = 'grey'
                             >
                
                
                </TextInput>  
                </View>

               
                       <View style = {styles.downbutton} >
                <TouchableOpacity style = {styles.dsub}
                                  onPress = {
                                    () => this.swipe(1)
                                  }>
                                  <Text style = {styles.dsubtext}>Find</Text>
                  </TouchableOpacity>

                <TouchableOpacity style = {styles.dsub}
                                  onPress = {
                                    () => this.props.navigation.navigate('Outgate')
                                  }>
                                  <Text style = {styles.dsubtext}>Clear</Text>
                  </TouchableOpacity>  
                  </View>
      	     </View>
                

                <View >
                   <KeyboardAwareScrollView enableOnAndroid 
                                            extraScrollHeight={100}
                                           enableAutomaticScroll={true}
                                            >
                        <KeyboardAvoidingView style= {styles.keycontainer} behavior= "padding" enabled>
              <View style = {styles.keycontainer}>
                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Truck License'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             keyboardType = 'numeric'
                             placeholderColor = 'grey'
                             >
                      
                      
                      </TextInput>  
                      </View>
                   


                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Container Number'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             keyboardType = 'numeric'
                             placeholderColor = 'grey'
                             >
                      
                      
                      </TextInput>  
                      </View>
                   


                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Current Seal'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             >
                      
                      
                      </TextInput>  
                      </View>



                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'New Seal'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             >
                      
                      
                      </TextInput>  
                      </View>

                     
                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Chassis Number'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             keyboardType = 'numeric'
                             placeholderColor = 'grey'
                             >
                      
                      
                      </TextInput>  
                      </View>

                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Accessory Number '
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             keyboardType = 'numeric'
                             placeholderColor = 'grey'
                             >
                      
                      
                      </TextInput>  
                      </View>

                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Accessory Fuel'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             >
                      
                      
                      </TextInput>  
                      </View>


                      <View style = {styles.textwithimage} >
                      <Image source = {require('../assets/images/ticon.png')} 
                              style = {styles.textimagestyle} ></Image>
                        <TextInput style = {styles.inputbox}
                             placeholder = 'Accessory Hour'
                             autoCapitalize = 'none'
                             onChangeText = {this.handle}
                             >
                      
                      
                      </TextInput>  
                      </View>


                          <View style = {styles.downbuttontwo} >
                        <TouchableOpacity style = {styles.dsub}
                                          onPress = {
                                            () => this.props.navigation.push('#')
                                          }>
                                          <Text style = {styles.dsubtext}>Commit</Text>
                          </TouchableOpacity>

                        <TouchableOpacity style = {styles.dsub}
                                          onPress = {
                                            () => this.props.navigation.push('#')
                                          }>
                                          <Text style = {styles.dsubtext}>Clear</Text>
                          </TouchableOpacity>  
                       </View>

                     </View>
                  
                     </KeyboardAvoidingView>
                </KeyboardAwareScrollView>

                                  


                </View>             
            </Swiper>
          </GestureRecognizer>
      </View>
    	);
    
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
    height: '100%',
    justifyContent: 'space-between',
		backgroundColor: '#252527',
	},

  keycontainer:{
    flex: 0,
   // position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 7,
    //marginBottom: 5,
    backgroundColor: '#252527',

    //alignSelf: 'auto',
    //flexDirection: 'column',
    justifyContent: 'space-between'
  },

    textwithimage:{
      width: '97%',
      backgroundColor: 'grey',
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 8,
      marginRight:12,

    },

    textimagestyle: {
      width: 33,
      height: 50,
      padding: 5

    },

    inputbox: {
    width: '100%',
    backgroundColor: 'grey',
    //marginTop: 10,
    height: 50,
    marginRight: 10,
    borderColor: 'black',
    color: 'white',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold'

  },

	submitbutton:{
    top:23,
    backgroundColor: '#00adef',
    //alignSelf: 'flex-start',
    width: "100%",
    height: 70,
    justifyContent: 'space-between',
    padding: 8, 
    flexDirection: 'row',
  },

  chomephoto:{
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    width: 30,
    height: 35,
    marginLeft: 2,


  },

  ingatebutton:{
    justifyContent: 'center',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
    //alignSelf: 'center',

  },

  textsubmitbutton:{
    justifyContent: 'flex-end',
    color: 'white',
    fontStyle: 'normal',
    fontSize: 20,
    //alignSelf: 'flex-end',


  },

  downbutton:{
    position: 'absolute',
    //position: 'fixed',
    top: '64%',
    //end: 'ltr',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    //alignSelf: 'flex-end',
    //alignItems: 'flex-end',
    alignItems: 'stretch',
    //marginBottom: 30,
    //justifyContent: 'flex-end',
    marginLeft: -10,
    //marginRight: 10

  },

    downbuttontwo:{
      flex:0,
      //justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      //alignItems: 'flex-end',
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: '10%',
      marginLeft: -10,

    },

  dsub:{
    width: '49%',
    height: 50,
    //alignSelf: 'flex-end',
    //justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#555557',
    borderColor: 'white',

  },

  dsubtext:{
    color: '#0face7',
    fontSize: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    borderColor: 'white'

  }


});