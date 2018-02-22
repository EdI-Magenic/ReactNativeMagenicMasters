
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomePage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Hello ' + navigation.state.params.userName
    });

    constructor(props) {
        super(props);
        this.state = { showText: false };
    }

    render() {
        return(
            <View style={styles.mainView}>
                <Button 
                    title="Toggle Text"
                    onPress={() => {
                        this.setState(currentState => {
                            return { showText: !currentState.showText };
                        });
                    }}
                />
                {
                    this.state.showText ? <Text>Now you see me</Text> : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
});
