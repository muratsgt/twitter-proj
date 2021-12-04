import styles from "./style.module.css";
import { useState, useContext, useEffect } from "react";
import cn from "classnames";
import { AuthContext } from '../../../store';
import { AreYouSure } from "../../../modals/AreYouSure";

// message to send unfollow modal
const unfollowMessage = "Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected."

// follow button, variable, dynamic
export default function FollowButton({ target, children, className, ...props }) {
    const [open, setOpen] = useState(false);    // for the modal
    const [following, setfollowing] = useState(false);
    const [loading, setloading] = useState(true);
    const { currentUser, setUser } = useContext(AuthContext);

    // update follow status according to db
    useEffect(() => {
        currentUser?.follows?.includes(target) && setfollowing(true);
        setloading(false);
    }, [currentUser, target])

    // when user clicks follow button
    const handleFollow = () => {
        setfollowing(st => !st);
        // update database
        fetch(`/api/setfollow/follow?user=${currentUser.adress}&target=${target}`)
            .then(res => console.log(`result:`, res));
        // update currentuser in context
        let tempArr = [...currentUser.follows, target];
        setUser({ ...currentUser, follows: tempArr });
    }

    // when user clicks unfollow button
    const handleUnfollow = () => {
        setfollowing(stat => !stat);
        // update database
        fetch(`/api/setfollow/unfollow?user=${currentUser.adress}&target=${target}`)
            .then(res => console.log(`result:`, res));
        // update currentuser in context
        let tempArr = [...currentUser.follows];
        let index = tempArr.indexOf(target);
        if (index > -1)
            tempArr.splice(index, 1)
        setUser({ ...currentUser, follows: tempArr });
    }

    // modal controllers for unfollow button
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        loading ? <div />
            : following ?
                <>
                    <button
                        onClick={onOpenModal}
                        type="button"
                        name="unfollow"
                        className={cn(styles.following, className)}
                        {...props}
                    >
                        <p>Following</p>
                        <p>Unfollow</p>
                        {children}
                    </button>
                    <AreYouSure
                        title={`Unfollow @${target}`}
                        message={unfollowMessage}
                        open={open}
                        onCloseModal={onCloseModal}
                        setResult={handleUnfollow}>
                        Unfollow
                    </AreYouSure>
                </> : <button
                    onClick={handleFollow}
                    type="button"
                    name="follow"
                    className={cn(styles.button, className)}
                    {...props}
                >
                    Follow
                    {children}
                </button>
    )
};
