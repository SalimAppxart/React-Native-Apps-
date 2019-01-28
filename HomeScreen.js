import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);

    this.state = {
          text: ' ',
          pass: '',
    };
  }
 

  render() {
    return (
          <ImageBackground source = {require('../assets/images/homeback.png')} style={{width:'100%', height:'100%', resizeMode: 'cover'}} >

      <KeyboardAwareScrollView style={styles.container} 
                             innerRef={ref => {
                              this.scroll = ref
                                }}
                                enableOnAndroid extraScrollHeight={200}
                                >

        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Image source = {require('../assets/images/pregate.png')} style= {styles.iconphoto}>
          </Image>
          <Image source = {require('../assets/images/text.png')} style= {styles.textphoto}>
          </Image>
          <View style = {styles.formview}>
          <TextInput style = {styles.textinputstyle}
                     placeholder=  "User Name"
                     autoCapitalize = 'characters'  
                     maxLength = {27} 
                     returnKeyType = { "next" }
                     onSubmitEditing = { ()=> {this.pass.focus(); }}
                     blurOnSubmit = {false}
                     onChangeText = { (text)=> this.setState({text}) }
                     //value = {this.state.text}
                    
                     clearButtonMode = 'always'
                     placeholderColor= 'grey'
                     >
          </TextInput>
           <TextInput style = {styles.textinputstyle}
                     placeholder=  "Password"
                     placeholderColor = 'grey'
                     autoCapitalize = "none" 
                     secureTextEntry
                     maxLength = {20}
                     ref = {(input)=> {this.pass = input; } }
                     onChangeText = {(pass)=> this.setState({pass}) }
                     //value = {this.state.pass}
                     clearButtonMode = 'always' 
                     >
          </TextInput>
               <View style= {styles.formviewdown}> 
                <TouchableOpacity style = {styles.textinputstylel}
                           onPress = {
                                ()=>this.props.navigation.push('Login')
                                  }>
                         <Text style = {styles.textsubmitbutton} >Login</Text>
         
                        </TouchableOpacity>
                <TouchableOpacity style = {styles.textinputstylel}
                           onPress = {
                              () => this.setState({text: ' '})
                           }>
                    <Text style = {styles.textsubmitbutton} >Clear</Text>

                </TouchableOpacity>
                  </View>
          </View>
        </View>
          

              </KeyboardAwareScrollView>
          </ImageBackground>

    );
  }

  /*_maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }*/

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

      _scrollToInput (reactNode: any) {
  // Add a 'scroll' ref to your ScrollView
      this.scroll.props.scrollToPosition(0, 0)
    };
}

const styles = StyleSheet.create({
  container: {
    top: 5,
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 5
    //resizeMode: 'cover'
    //backgroundColor: '#fff',
  },
  
  contentContainer: {
    //paddingTop: 30,
  },

  iconphoto:{
    justifyContent: 'center',
    alignSelf: 'center',
    //paddingTop: 20,
    width: 160,
    height: 170,
    marginTop: 20,
    marginBottom: 40,
    //padding: 10,


  },
  textphoto:{
    alignSelf: 'center',
    width: 180,
    height: 65,
    justifyContent: 'center',
    //padding: 10,
    //resizeMode: 'cover',

    //marginTop: 30,

  },
  formview:{
    width: '100%',
    height: '100%',
    flex: 0,

  },
  formviewdown: {
    flex: 0,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center'
    },

  textinputstyle:{
    alignSelf: 'center',
    width:320,
    height:60,
    color: 'white',
    justifyContent: 'center',
    marginTop: 30,
    marginRight: 2,
    //marginLeft: 2,
    padding: 1,
    paddingLeft: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0a455d',
    borderRadius: 10,
    backgroundColor: '#04040797',
    borderStyle: 'solid',
    fontSize: 18,
    fontStyle: 'normal',
    



  },
  textinputstylel:{
    alignSelf: 'center',
    width:150,
    height:60,
    color: 'white',
    justifyContent: 'center',
    marginTop: 30,
    marginRight: 5,
    marginLeft: 5,
    padding: 1,
    paddingLeft: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0a455d',
    borderRadius: 10,
    backgroundColor: '#04040797',
    borderStyle: 'solid',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'bold',


  },

  textsubmitbutton:{
    color: 'white',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
  }

});
