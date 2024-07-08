/**
 * This file was generated from MxRnNativePassword.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface MxRnNativePasswordProps<Style> {
    name: string;
    style: Style[];
    password: EditableValue<string>;
}

export interface MxRnNativePasswordPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    password: string;
}
