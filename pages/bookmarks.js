import Layout from "../layout/Layout";
import MainHeader from "../components/MainHeader";
import { NothingHere } from "../components/NothingHere";

function Bookmarks() {
    return (
        <Layout>
            <MainHeader title="Bookmarks"></MainHeader>
            <NothingHere
                message="You haven’t added any Tweets to your Bookmarks yet"
                detail="When you do, they’ll show up here."
            ></NothingHere>
        </Layout>
    )
};

export default Bookmarks;