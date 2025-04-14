import { ReactComponent as Leetcode } from "../assets/images/leetcode.svg";
import { ReactComponent as Github } from "../assets/images/github.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin.svg";
import { ReactComponent as CodeForces} from "../assets/images/CodeForces.svg"
import { SOCIAL_CODING_PROFILES } from "../constants/enums";

/**
 * Function to get an image component by name
 * @param {string} imageName - The name of the image to retrieve
 * @returns {React.Component|null} - The corresponding image component or null if not found
 */
export function getImageByName(imageName) {
    switch (imageName) {
        case SOCIAL_CODING_PROFILES.LEETCODE:
            return <Leetcode width={20} height={20}/>;
        case SOCIAL_CODING_PROFILES.GITHUB:
            return <Github width={20} height={20}/>;
        case SOCIAL_CODING_PROFILES.LINKEDIN:
            return <Linkedin width={20} height={20}/>;
        case SOCIAL_CODING_PROFILES.CODEFORCES:
            return <CodeForces width={20} height={20}/>;

        default:
            return null; // Return null if the image name does not match any case
    }
}
