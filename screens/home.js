import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, ScrollViewComponent } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { Card,Title,Paragraph } from 'react-native-paper';

function HomeScreen({Navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <Card color={"blue"}>
            <Card.Title/>
                <Card.Content>
                <Title>CythiYa L.</Title>
                <Paragraph>Student</Paragraph>
                </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
            <Card>
            <Card.Title/>
                <Card.Content>
                <Title>Andrea B.</Title>
                <Paragraph>Student</Paragraph>
                </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
            <Card>
            <Card.Title/>
                <Card.Content>
                <Title>Andy lam.</Title>
                <Paragraph>Student</Paragraph>
                </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
            </ScrollView>
        </SafeAreaView>
    );
        
}
export default HomeScreen;