
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

    constructor(props) {
        super(props);
        this.state = { userName: '' };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <View style={styles.spacer} />
                <Text>User Name:</Text>
                <TextInput 
                    onChangeText={(userName) => this.setState({userName})} 
                    value={this.state.userName} 
                />
                <Button 
                    title="Login"
                    onPress={() => {
                        navigate('HomePage', this.state);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleView: {

    },
    inputView: {

    },
    mainView: {
        flex: 1,
        flexDirection: 'column'
    },
    spacer: {
        flex: 0.3
    }
});
