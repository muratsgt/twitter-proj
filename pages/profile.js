import Layout from "../layout/Layout";
import Tweet from "../components/Tweet";
import MainHeader from "../components/MainHeader";
import ProfileInfo from "../components/ProfileInfo";
import { Loading } from "../components/Icons";
import sortTweets from "../helper/sortTweets";
import useFetcher from "../helper/useFetcher";

const currentUser = "muratakca9";

function Profile() {
    const userInfo = useFetcher(`/api/user/${currentUser}`);
    const userTweets = useFetcher(`/api/tweet?user=${currentUser}`);

    return (
        <Layout>
            <MainHeader
                back
                title={userInfo?.data?.adress}
                tweetNum={37}>
            </MainHeader>
            {
                userInfo.isLoading ? <Loading />
                    : <ProfileInfo user={userInfo.data}></ProfileInfo>
            }
            {
                userTweets.isLoading ? <Loading />
                    : sortTweets(userTweets.data)
                        .map((entry) => <Tweet key={entry._id} entry={entry}></Tweet>)
            }
        </Layout>
    )
};

export default Profile;