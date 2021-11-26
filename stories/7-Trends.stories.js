import TrendsBox from "../components/TrendsBox";
import { TRENDS } from "../data";

export default {
    title: "Trends",
    args: {
    }
};

export const TrendBox = (args) => (<TrendsBox trends={TRENDS} {...args}></TrendsBox>);