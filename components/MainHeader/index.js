import React from 'react';
import styles from "./style.module.css";
import cn from "classnames";
import { TextTitle } from '../Text';
import IconButton from '../buttons/IconButton';
import { ArrowLeft } from "../Icons";
import { useRouter } from 'next/router'


function MainHeader({ className, title, tweetNum, back, ...props }) {
    const router = useRouter();
    const handleBack = () => router.back();

    return (
        <div className={cn(styles.area, className)} {...props}>
            {
                back && <div className={styles.backbutton}>
                    <IconButton onClick={handleBack}><ArrowLeft /> </IconButton>
                </div>
            }
            {
                title && <div className={styles.textarea}>
                    <TextTitle bold>{title}</TextTitle>
                    {tweetNum && <span>{tweetNum} Tweets</span>}
                </div>
            }
        </div>
    )
}

export default MainHeader;
