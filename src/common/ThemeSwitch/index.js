// import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
    // const dispatch = useDispatch();
    // const isDarkTheme = useSelector();
    return (
        <Wrapper>
            <Button>
                <Text>
                    Dark mode
                    {/* {isDarkTheme ? "on" : "off"} */}
                </Text>
                <Box>
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    )
}