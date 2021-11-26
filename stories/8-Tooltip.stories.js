import TooltipProfile from "../components/TooltipProfile";
import { CurrentUser } from "../data";

export default {
    title: "Tooltip",
    args: {
    }
};

export const ProfileTooltip = (args) => (<TooltipProfile user={CurrentUser}
    style={{ visibility: "visible" }} {...args}></TooltipProfile >);