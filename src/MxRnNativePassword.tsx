import { ReactElement, createElement, useRef } from "react";
import { TextStyle, ViewStyle, Alert, Keyboard } from "react-native";
import OutsideView from "react-native-detect-press-outside";
import { Style } from "@mendix/pluggable-widgets-tools";

import NativePassword from "./components/NativePassword";
import { MxRnNativePasswordProps } from "../typings/MxRnNativePasswordProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function MxRnNativePassword({ style, password }: MxRnNativePasswordProps<CustomStyle>): ReactElement {
    const ref = useRef(null);
    return (
        <OutsideView
            childRef={ref}
            onPressOutside={() => {
                // handle press outside of childRef event
                Alert.alert("hello");
                Keyboard.dismiss();
            }}
        >
            <NativePassword password={password} style={style} ref={ref} />
        </OutsideView>
    );
}
