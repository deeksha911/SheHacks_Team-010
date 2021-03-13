import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,ScrollView
}from "react-native";
import { Card,Title,Paragraph } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

function SosScreen({Navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        <Text>sos</Text>
        </ScrollView>
        </SafeAreaView>
    );
        
}

export default SosScreen;

const styles = StyleSheet.create({
    container :{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    }
});