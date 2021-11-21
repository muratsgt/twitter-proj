import React from 'react';
import NavButton from './NavButton';
import styles from "./Navigation.module.css";
import { Twitter } from "./icons";
import TextTitle from './TextTitle';
import { MENU } from '../constants';
import Link from 'next//link';
import { useRouter } from 'next/router'

export default function Navigation({ wide = true, children }) {
    const router = useRouter();
    const selectedKey = router.route;

    return (
        <nav className={styles.nav}>
            <Link href={"/"}>
                <NavButton >
                    <Twitter style={{ fontSize: 30 }} />
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
