import * as Icons from "../components/icons";
import Avatar from "../components/Avatar";

export default {
    title: "Icons"
};

export const Icon = () => (
    <div className="icons">
        <Icons.ArrowBottom />
        <Icons.Bookmark />
        <Icons.BookmarkFill />
        <Icons.Close />
        <Icons.Dots />
        <Icons.Emoji />
        <Icons.Explore />
        <Icons.ExplorerFill />
        <Icons.Gif />
        <Icons.Home />
        <Icons.HomeFill />
        <Icons.Like />
        <Icons.Lists />
        <Icons.ListsFill />
        <Icons.Logout />
        <Icons.Media />
        <Icons.Messages />
        <Icons.MessagesFill />
        <Icons.More />
        <Icons.Notification />
        <Icons.NotificationFill />
        <Icons.Options />
        <Icons.Profile />
        <Icons.ProfileFill />
        <Icons.Question />
        <Icons.Reply />
        <Icons.Retweet />
        <Icons.Search />
        <Icons.Share />
        <Icons.SignInThin />
        <Icons.TimelineProp />
        <Icons.Tweet />
        <Icons.Twitter />
    </div>
);

export const Photo = () => {
    return (
        <div>

            <Avatar></Avatar>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%CE%9F%CE%B9_%22%CF%81%CE%BF%CF%85%CE%BA%CE%B5%CF%84%CE%B1%CF%84%CE%B6%CE%AE%CE%B4%CE%B5%CF%82%22.jpg/1280px-%CE%9F%CE%B9_%22%CF%81%CE%BF%CF%85%CE%BA%CE%B5%CF%84%CE%B1%CF%84%CE%B6%CE%AE%CE%B4%CE%B5%CF%82%22.jpg"></Avatar>
        </div>
    )
}