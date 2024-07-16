import { ReactElement, createElement, forwardRef, useEffect, useState } from "react";
import { TextInput, View, Appearance, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../MxRnNativePassword";

import { EditableValue } from "mendix";

const mode = Appearance.getColorScheme();

export interface NativePasswordProps {
    password: EditableValue<string>;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 8,
        marginVertical: 10
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 2,
        fontSize: 18,
        color: mode === "dark" ? "#fff" : "#000"
    },
    iconContainer: {
        padding: 4
    },
    label: {
        color: "#F6BB42"
    }
};

export type Ref = React.ElementRef<typeof View> | null;

const NativePassword = forwardRef<Ref, NativePasswordProps>(
    ({ password, style }: NativePasswordProps, viewRef): ReactElement => {
        const styles = mergeNativeStyles(defaultStyle, style);
        const [passwordStateValue, setPasswordStateValue] = useState("");
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);

        useEffect(() => {
            if (password.value) {
                setPasswordStateValue(password.value.toString());
            }
        }, [password]);

        const togglePasswordVisibility = (): void => {
            setIsPasswordVisible(!isPasswordVisible);
        };
        return (
            <View style={styles.container} ref={viewRef}>
                <TextInput
                    secureTextEntry={!isPasswordVisible}
                    style={styles.input}
                    placeholder={"Password"}
                    placeholderTextColor="#888"
                    value={passwordStateValue}
                    onChangeText={text => {
                        password.setValue(text);
                        setPasswordStateValue(text);
                    }}
                />
                <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
                    <Icon
                        name={isPasswordVisible ? "eye-off" : "eye"}
                        type="material-community"
                        size={24}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>
        );
    }
);

export default NativePassword;
