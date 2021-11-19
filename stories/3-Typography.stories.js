import TextTitle from "../components/TextTitle";
import TextBody from "../components/TextBody";

export default {
    title: "Typography"
};

export const Typography = () => (
    <div >
        <TextTitle>Title Text</TextTitle>
        <TextTitle bold={false}>Title Text Not Bold</TextTitle>
        <TextBody>Body Text</TextBody>
        <TextBody bold>Body Text Bold</TextBody>
    </div>
);