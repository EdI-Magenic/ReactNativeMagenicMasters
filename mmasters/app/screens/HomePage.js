
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HomePage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params.userName
    });

    render() {
        return(
            <View style={styles.mainView}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
});
