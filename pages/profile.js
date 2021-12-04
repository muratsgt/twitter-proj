import Layout from "../layout/Layout";
import Tweet from "../components/Tweet";
import MainHeader from "../components/MainHeader";
import ProfileInfo from "../components/ProfileInfo";
import { Loading } from "../components/Icons";
import useFetcher from "../helper/useFetcher";
import { NothingHere } from "../components/NothingHere";
import { AuthContext } from "../store";
import { useContext } from "react";

// profile page
function Profile() {
    const { currentUser } = useContext(AuthContext);
    const userTweets = useFetcher(`/api/tweet?user=${currentUser?.adress}`);

    let gotError = userTweets.isError;
    let stillLoading = userTweets.isLoading;

    return (
        <Layout>
            <MainHeader
                back
                title={currentUser?.adress}
                tweetNum={37}>
            </MainHeader>
            {
                stillLoading ? <Loading />
                    : gotError ? <NothingHere message="error on data load!" />
                        : <>
                            <ProfileInfo user={currentUser}></ProfileInfo>
                            {userTweets?.data
                                .map((entry) => <Tweet key={entry._id} entry={entry}></Tweet>)}
                        </>
            }
        </Layout>
    )
};

export default Profile;