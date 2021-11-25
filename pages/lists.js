import Layout from "../layout/Layout";
import MainHeader from "../components/MainHeader";
import { NothingHere } from "../components/NothingHere";

function Lists() {
    return (
        <Layout>
            <MainHeader back title="Lists"></MainHeader>
            <NothingHere
                message="Your Lists"
                detail="You haven't created or followed any Lists. When you do, they'll show up here."
            ></NothingHere>
        </Layout>
    )
};

export default Lists;