import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>
                    Dark mode {isDarkTheme ? "on" : "off"}
                </Text>
                <Box>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    )
}