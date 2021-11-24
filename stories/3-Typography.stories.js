import {TextTitle, TextBody} from "../components/Text";

export default {
    title: "Typography"
};

export const Typography = () => (
    <div >
        <TextTitle>Title Text</TextTitle>
        <TextTitle bold>Title Text Bold</TextTitle>
        <TextBody>Body Text</TextBody>
        <TextBody bold>Body Text Bold</TextBody>
    </div>
);