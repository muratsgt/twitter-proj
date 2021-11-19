import TextTitle from "../components/TextTitle";

export default {
    title: "Typography"
};

export const Typography = () => (
    <div >
        <TextTitle>Title Text</TextTitle>
        <TextTitle bold={false}>Title Text Not Bold</TextTitle>
    </div>
);