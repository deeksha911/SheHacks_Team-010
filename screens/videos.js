import React, { Component } from "react";
import{View,Text,StyleSheet,ScrollView, Dimensions,Image}from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import Category from './components/videos/catagory'

const { height, width } = Dimensions.get('window')

function videosScreen({Navigation}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    What can we help you find?
                </Text>
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                    <Category imageUri={require('../assests/images/exercise.jpeg')}
                        name="Self-Defense"
                    />
                    <Category imageUri={require('../assests/images/beauty.jpg')}
                        name="Beauty"
                    />
                    <Category imageUri={ require('../assests/images/receipe.jpeg')}
                        name="Receipe"
                                    />
                    </ScrollView>
                </View>
                <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>
                        Popular
                    </Text>
                    <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                            uri: 'https://www.youtube.com/watch?v=mRiQepoX2BU',
                            }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        
                    </View>
                </View>
            </View>
        </ScrollView>
        )
    }
export default videosScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
  });
  