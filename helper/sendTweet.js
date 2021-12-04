// sends tweet to server
export const sendTweet = async (currentUser, newEntry) => {
    let post = {
        username: currentUser.name,
        useradress: currentUser.adress,
        userImage: currentUser.imageUrl,
        bio: currentUser.bio,
        following: currentUser.following,
        followers: currentUser.followers,
        content: newEntry,
        time: Date.now(),
        imgContent: null,
        replied: 0,
        retweeted: 0,
        liked: 0,
    }
    try {
        let response = await fetch("/api/tweet", {
            method: "POST",
            body: JSON.stringify(post),
        });
        let data = await response.json();
        console.log(`data`, data);

        // reset input in writers
        document.getElementById("tweetEntryArea").value = "";
        document.getElementById("tweetEntryModal").value = "";

    } catch (error) {
        console.log(`error`, error)
    }
}