/// <reference types="react" />
import { SpeedDial, SpeedDialProps } from './SpeedDial';
import { SpeedDialActionProps } from './components/SpeedDialAction';
export { SpeedDial };
export type { SpeedDialProps, SpeedDialActionProps };
declare const _default: (import("react").FunctionComponent<Pick<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: import("../Icon").IconNode;
    overlayColor?: string;
    children?: import("react").ReactChild[];
    transitionDuration?: number;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
} & Partial<import("../config").ThemeProps<SpeedDialProps>>, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "size" | "containerStyle" | "onPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onLongPress" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "children" | "title" | "TouchableComponent" | "buttonStyle" | "type" | "loading" | "loadingStyle" | "loadingProps" | "titleProps" | "titleStyle" | "icon" | "iconContainerStyle" | "iconRight" | "disabledStyle" | "disabledTitleStyle" | "raised" | "linearGradientProps" | "ViewComponent" | "iconPosition" | "background" | "useForeground" | "color" | "transitionDuration" | "upperCase" | "placement" | "isOpen" | "onOpen" | "onClose" | "openIcon" | "overlayColor">> & {
    Action: import("../helpers").RneFunctionComponent<Pick<import("..").FABProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "containerStyle" | "onPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onLongPress" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "title" | "TouchableComponent" | "buttonStyle" | "type" | "loading" | "loadingStyle" | "loadingProps" | "titleProps" | "titleStyle" | "icon" | "iconContainerStyle" | "iconRight" | "disabledStyle" | "disabledTitleStyle" | "raised" | "linearGradientProps" | "ViewComponent" | "iconPosition" | "background" | "useForeground" | "color" | "upperCase" | "placement">>;
}) | (import("react").ForwardRefExoticComponent<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    openIcon?: import("../Icon").IconNode;
    overlayColor?: string;
    children?: import("react").ReactChild[];
    transitionDuration?: number;
} & import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "bottom" | "left" | "right" | "top";
} & {
    color?: string;
    size?: "small" | "large";
    placement?: "left" | "right";
    visible?: boolean;
    upperCase?: boolean;
} & Partial<import("../config").ThemeProps<SpeedDialProps>>> & {
    Action: import("../helpers").RneFunctionComponent<Pick<import("..").FABProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "visible" | "containerStyle" | "onPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "onBlur" | "onFocus" | "onLongPress" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "title" | "TouchableComponent" | "buttonStyle" | "type" | "loading" | "loadingStyle" | "loadingProps" | "titleProps" | "titleStyle" | "icon" | "iconContainerStyle" | "iconRight" | "disabledStyle" | "disabledTitleStyle" | "raised" | "linearGradientProps" | "ViewComponent" | "iconPosition" | "background" | "useForeground" | "color" | "upperCase" | "placement">>;
});
export default _default;
