import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/GithubIcon.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIcon.svg";


export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/virusse7",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-wieczorek-901dw/",
        Icon: styleIcon(LinkedInIcon),
    },
];