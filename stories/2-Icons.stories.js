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
        <Avatar></Avatar>
    )
}