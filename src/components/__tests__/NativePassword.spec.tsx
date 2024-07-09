import { createElement } from "react";
import { shallow } from "enzyme";
import { Platform } from "react-native";

import { NativePassword, NativePasswordProps } from "../NativePassword";

describe.each(["ios", "android"])("HelloWorld for %s", (os: "ios" | "android") => {
    beforeEach(() => {
        Platform.OS = os;
        Platform.select = jest.fn((dict: any) => dict[Platform.OS]);
    });

    it("renders the structure correctly", () => {
        const nativePasswordProps: NativePasswordProps = {
            password: "password",
            style: []
        };
        const helloWorld = shallow(<NativePassword {...nativePasswordProps} />);

        expect(helloWorld).toMatchSnapshot();
    });

    it("renders the structure correctly with custom style", () => {
        const nativePasswordProps: NativePasswordProps = {
            password: null,
            style: [{ container: { borderColor: "white" }, label: { color: "black" } }]
        };
        const helloWorld = shallow(<NativePassword {...nativePasswordProps} />);

        expect(helloWorld).toMatchSnapshot();
    });
});
