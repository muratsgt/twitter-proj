import styles from "./style.module.css";
import { useState, useContext, useEffect } from "react";
import cn from "classnames";
import { AuthContext } from '../../../store';
import { AreYouSure } from "../../../modals/AreYouSure";

// TODOS
// follow statusu dataya kaydet

const unfollowMessage = "Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected."


export default function FollowButton({ target, children, className, ...props }) {
    const [open, setOpen] = useState(false);    // for the modal
    const [following, setfollowing] = useState(false)
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        currentUser?.follows?.includes(target) && setfollowing(true);
    }, [currentUser, target])

    const handleFollow = () => {
        setfollowing(st => !st)
    }

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        following ?
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
                    setResult={setfollowing}>
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
