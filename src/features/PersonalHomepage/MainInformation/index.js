import { Wrapper, Avatar, ThisIs, Name, Summary, Icon, StyledButtonLink } from "./styled";
import profile from "./profile.jpg";
import { email } from "../email";

export const MainInformation = () => {
    return (
        <Wrapper>
            <Avatar src={profile} alt="Daniel Wieczorek" />
            <div>
                <ThisIs>This is</ThisIs>
                <Name>Daniel Wieczorek</Name>
                <Summary>
                    💻 I want to become a Frontend Developer in React at now,
                    my next step is to be Fullstack Developer
                    and I will go for it!
                </Summary>
                <StyledButtonLink href={`mailto:${email}`} title={email} >
                    <Icon />
                    Hire Me
                </StyledButtonLink>
            </div>
        </Wrapper>
    );
};