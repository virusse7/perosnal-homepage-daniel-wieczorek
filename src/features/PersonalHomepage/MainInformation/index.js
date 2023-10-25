import { Wrapper, Avatar, ThisIs, Name, Summary, ButtonLink, Icon } from "./styled"
import profile from "./profile.jpg";

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
                <ButtonLink >
                    <Icon /> Hire Me
                </ButtonLink>
            </div>
        </Wrapper>
    );
}