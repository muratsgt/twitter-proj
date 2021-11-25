import Layout from "../layout/Layout";
import MainHeader from "../components/MainHeader";
import { NothingHere } from "../components/NothingHere";

function Messages() {
    return (
        <Layout>
            <MainHeader title="Messages"></MainHeader>
            <NothingHere
                message="Send a message, get a message"
                detail="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
            ></NothingHere>
        </Layout>
    )
};

export default Messages;