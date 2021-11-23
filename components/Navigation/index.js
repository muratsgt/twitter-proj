import styles from "./style.module.css";
import NavButton from "../buttons/NavButton";
import { TextTitle } from "../Text";
import { Twitter } from "../Icons";
import { MENU } from '../../constants';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Navigation({ wide = true, children }) {
    const router = useRouter();
    const selectedKey = router.asPath;

    return (
        <nav className={styles.nav}>
            <Link href={"/"}>
                <NavButton >
                    <Twitter style={{ fontSize: 30}} />
                </NavButton>
            </Link>

            {MENU.map((b) => {
                const notif = b.notify ? b.notify : null;
                const selected = selectedKey === b.path;
                return (
                    <Link key={b.key} href={b.path}>
                        <NavButton
                            notify={notif}
                            selected={selected}
                        >
                            {selected ? b.compfill : b.comp}
                            {wide && <TextTitle bold={selected}>{b.key}</TextTitle>}
                        </NavButton>
                    </Link>
                )
            })}
            {children}
        </nav>
    )
};
