import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Ingate extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
  	/*Inline Image can also work in TextInput Field.*/
  		return(
  		<View sytle = {styles.container}>
  				 <TouchableOpacity style = {styles.submitbutton}
                    onPress = {
                      () => this.props.navigation.push('Home')
                    }>
                    <Image source = {require('../assets/images/chome.png')} 
                    	style = {styles.chomephoto}
                    ></Image>
                    <Text style = {styles.ingatebutton}> PRE-INGATE</Text>
                    <Text style = {styles.textsubmitbutton} >Logout</Text>
                    </TouchableOpacity>
                    
                    <KeyboardAwareScrollView enableOnAndroid
                    						 extraScrollHeight={100}
                    						 enableAutomaticScroll={true}
                    						  >
                   <KeyboardAvoidingView   behavior="padding" enabled>
    					<View style = {styles.contentContainer} >
			                <View style = {styles.textwithimage} >
			                <Image source = {require('../assets/images/ticon.png')} 
			                        style = {styles.textimagestyle} ></Image>
			                  <TextInput style = {styles.inputbox}
			                       placeholder = 'Truck License'
			                       autoCapitalize = 'none'
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.second.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}
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
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.third.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.second = input; }}
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
			                       placeholder = 'Container Damage'
			                       autoCapitalize = 'none'
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.fourth.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.third = input; }}

			                       onChangeText = {this.handle}
			                       >
			                
			                
			                </TextInput>  
			                </View>



			                <View style = {styles.textwithimage} >
			                <Image source = {require('../assets/images/ticon.png')} 
			                        style = {styles.textimagestyle} ></Image>
			                  <TextInput style = {styles.inputbox}
			                       placeholder = 'Seal 1'
			                       autoCapitalize = 'none'
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.fifth.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.fourth = input; }}

			                       onChangeText = {this.handle}
			                       >
			                
			                
			                </TextInput>  
			                </View>

			                <View style = {styles.textwithimage} >
			                <Image source = {require('../assets/images/ticon.png')} 
			                        style = {styles.textimagestyle} ></Image>
			                  <TextInput style = {styles.inputbox}
			                       placeholder = 'Seal 2'
			                       autoCapitalize = 'none'
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.sixth.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.fifth = input; }}

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
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.seventh.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.sixth = input; }}

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
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.eight.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.seventh = input; }}

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
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.ninth.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.eight = input; }}

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
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.tenth.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.ninth = input; }}

			                       onChangeText = {this.handle}
			                       >
			                
			                
			                </TextInput>  
			                </View>


			                <View style = {styles.textwithimage} >
			                <Image source = {require('../assets/images/ticon.png')} 
			                        style = {styles.textimagestyle} ></Image>
			                  <TextInput style = {styles.inputbox}
			                       placeholder = 'Set Temp'
			                       autoCapitalize = 'none'
			                       returnKeyType = { "next" }
			                       onSubmitEditing = { ()=> {this.eleven.focus(); }}
			                       blurOnSubmit = {false}
			                       maxLength = {20}

			                       ref = {(input) => {this.tenth = input; }}

			                       onChangeText = {this.handle}
			                       >
			                
			                
			                </TextInput>  
			                </View>


			                <View style = {styles.textwithimage} >
			                <Image source = {require('../assets/images/ticon.png')} 
			                        style = {styles.textimagestyle} ></Image>
			                  <TextInput style = {styles.inputbox}
			                       placeholder = 'Read Temp'
			                       autoCapitalize = 'none'
			                       ref = {(input)=> {this.eleven = input;}}
			                       onChangeText = {this.handle}
			                       >
			                
			                
			                </TextInput>  
			                </View>



			                <View style = {styles.downbutton} >
				                <TouchableOpacity style = {styles.dsub}
				                                  onPress = {
				                                    () => this.props.navigation.navigate('Ingate')
				                                  }>
				                                  <Text style = {styles.dsubtext}>Commit</Text>
				                  </TouchableOpacity>

				                <TouchableOpacity style = {styles.dsub}
				                                  onPress = {
				                                    () => this.setState({text: ' '})
				                                  }>
				                                  <Text style = {styles.dsubtext}>Clear</Text>
				                  </TouchableOpacity>  
                 			 </View>
			      	     </View>  
			      	 {/*Key Container closed*/}


    				</KeyboardAvoidingView>
    							                
  					</KeyboardAwareScrollView>

  		</View>

    	);
    
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#252527',
		justifyContent: 'space-between',
		resizeMode: 'cover'
	},

	contentContainer:{
	    flex: 0,
	    //top: 15,
	    width: '100%',
	    height: '100%',
	    //position: 'relative',
	    //height: 'auto',
	    marginTop: 10,
	    backgroundColor: '#252527',
	    //justifyContent: 'space-between',
	    //resizeMode: 'cover'
  },

    textwithimage:{
      width: '100%',
      backgroundColor: 'grey',
      flexDirection: 'row',
      marginTop: 4,
      marginLeft: 8,
      marginRight:10,

    },

    textimagestyle: {
      width: 30,
      height: 47,
      padding: 5

    },

    inputbox: {
	    width: '100%',
	    backgroundColor: 'grey',
	    //marginTop: 10,
	    height: 48,
	    borderColor: 'black',
	    color: 'white',
	    fontSize: 24,
	    fontWeight: 'bold',
	    fontStyle: 'normal',
	    

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
  	//top: '120%',
    width: '100%',
    //height: 'auto',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    //justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignItems: 'stretch',
    marginTop: 20,
    marginLeft: -20,
    marginRight: 0

  },

  dsub:{
    width: '50%',
    height: 50,
    //alignSelf: 'flex-end',
    //justifyContent: 'flex-end',
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

  },



});