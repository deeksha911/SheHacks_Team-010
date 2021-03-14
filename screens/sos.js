import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,ScrollView
}from "react-native";
import { Card,Title,Paragraph } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

function SosScreen({Navigation}) {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert",
      "Send Email to Emergency Number.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    return (
        <View style={styles.container}>
            <Text>Need Help?Shake Your Phone!</Text>
            <Button title="Shake" onPress={createTwoButtonAlert} />
        </View>
      );
    }
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
    }
});
export default SosScreen;

/*
onShake();{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to: email,
    from: 'email@example.com',
    subject: 'Example Email',
    text: `
    Dear user, .
    `,
    html: `
    <p>Dear user,</p>    <p>I need your help!.</p>
    `,
};
sgMail.send(msg);
}

export default SosScreen;

const styles = StyleSheet.create({
    container :{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    }
});*/
