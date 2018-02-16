
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Alert
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <View style={styles.topSpacer} />
                <Text>User Name:</Text>
                <TextInput />
                <Button 
                    title="Login"
                    onPress={() => {
                        navigate('HomePage', { userName: 'Kevin' });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column'
    },
    spacer: {
        flex: 0.3
    }
});
