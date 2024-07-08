import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { NativePassword } from "./components/NativePassword";
import { MxRnNativePasswordProps } from "../typings/MxRnNativePasswordProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function MxRnNativePassword({ style, password }: MxRnNativePasswordProps<CustomStyle>): ReactElement {
    return <NativePassword password={password} style={style} />;
}
