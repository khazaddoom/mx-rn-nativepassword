import { ReactElement, createElement, useState, useEffect } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../MxRnNativePassword";

import { EditableValue } from "mendix";

export interface NativePasswordProps {
    password: EditableValue<string>;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    iconContainer: {
        padding: 4,
    },
    label: {
        color: "#F6BB42"
    }
};

export function NativePassword({ password, style }: NativePasswordProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);
    const [passwordStateValue, setPasswordStateValue] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        if(password.value) {
            setPasswordStateValue(password.value.toString())
        }
    }, [password])
    

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            secureTextEntry={!isPasswordVisible}
            <TextInput
            style={styles.input}
            placeholder={"Password"}
            placeholderTextColor="#888" 
            value={passwordStateValue}
            onChangeText={text => {
                password.setValue(text);
                setPasswordStateValue(text);
            }}
            />
            <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}
            >
                
            <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                type="material-community"
                size={24}
                color="gray"
            />
            </TouchableOpacity>
        </View>
    );
}
