import { Wrapper, Avatar, ThisIs, Name, Summary, ButtonLink, Icon } from "./styled";
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
                <ButtonLink href={`mailto:${email}`} title={email} >
                    <Icon />
                    Hire Me
                </ButtonLink>
            </div>
        </Wrapper>
    );
};