import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView
}from "react-native";
import Category from './components/travel/catagory'

const { height, width } = Dimensions.get('window')

function travelScreen({Navigation}) {
    return (
    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you find, Varun?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assests/images/beach.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../assests/images/beach.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../assests/images/beach.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assests/images/beach.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                    </ScrollView>
    )
}


export default travelScreen;