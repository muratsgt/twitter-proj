import { useRouter } from "next/router";
import Layout from "../../../layout/Layout";
import Tweet from "../../../components/Tweet";
import MainHeader from "../../../components/MainHeader";
import useFetcher from "../../../helper/useFetcher";
import { Loading } from "../../../components/Icons";
import { NothingHere } from "../../../components/NothingHere";

// page to show one tweet
function TweetPage() {
    const router = useRouter();
    // fetch data of tweet from server
    const { data, isLoading, isError } = useFetcher(`/api/tweet/${router.query.tweet}`);

    return (
        <Layout>
            <MainHeader back title="Tweet"></MainHeader>
            {
                isError ? <NothingHere message="failed to load data" />
                    : (
                        isLoading ? <Loading></Loading>
                            : <Tweet entry={data}></Tweet>
                    )
            }
        </Layout>
    )
};

export default TweetPage;