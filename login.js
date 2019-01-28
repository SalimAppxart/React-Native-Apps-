import React from 'react';
import { ScrollView, StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity style = {styles.submitbutton}
                    onPress = {
                      () => this.props.navigation.push('Home')
                    }>
                    <Text style = {styles.textsubmitbutton} >Logout</Text>
                    </TouchableOpacity>
                <View style = {styles.innerview}>
                <TouchableOpacity style = {styles.submitbuttonone}
                    onPress = {
                      () => this.props.navigation.push('Ingate')
                    }>
                    <Text style = {styles.textsubmitbuttonup} >IN</Text>
                    <Text style = {styles.textsubmitbuttondown} >PRE-INGATE </Text>
                    </TouchableOpacity>
               
                <TouchableOpacity style = {styles.submitbuttonone}
                    onPress = {
                      () => this.props.navigation.push('Outgate')

                    }>
                    <Text style = {styles.textsubmitbuttonup} >OUT</Text>
                    <Text style = {styles.textsubmitbuttondown} >PRE-OUTGATE</Text>
                    </TouchableOpacity>
                </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // paddingTop: 15,
    //height: 'auto',
    width: '100%',
    backgroundColor: '#252527',
    //alignItems: 'center',
    //justifyContent: 'space-between'
  },
  submitbutton:{
    top:23,
    backgroundColor: '#00adef',
    //alignSelf: 'flex-start',
    width: "100%",
    height: 50,
    //marginLeft: 400,
    padding: 10,
  },
  textsubmitbutton:{
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'flex-end',

  },
  innerview:{
    width: '100%',
   // alignItems: 'center',
    marginTop: '50%',
   // justifyContent: 'center',
    alignSelf: 'center'

  },
  submitbuttonone:{
    backgroundColor: '#0b85b4',
    justifyContent: 'center',
    //width: '80%'
    alignSelf: 'center',
    width: '80%',
    height: '50%',
    marginTop: 20,
    borderRadius: 10,


  },
  textsubmitbuttonup:{
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',

  },

  textsubmitbuttondown:{
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    alignSelf:'center',
  }
});
