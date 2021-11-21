import React from 'react';
import * as Icon from "../components/icons";

export const SIZES = {
    HANDY: 490,
    TABLET: 1020,
    DESKTOP: 1280,
};

export const MENU = [
    {
        key: "Home",
        path: "/",
        comp: <Icon.Home />,
        compfill: <Icon.HomeFill />,
        notify: 0,
    },
    {
        key: "Explore",
        path: "/explore",
        comp: <Icon.Explore />,
        compfill: <Icon.ExplorerFill />,
        notify: 0
    },
    {
        key: "Notifications",
        path: "/notifications",
        comp: <Icon.Notification />,
        compfill: <Icon.NotificationFill />,
        notify: 12
    },
    {
        key: "Messages",
        path: "/messages",
        comp: <Icon.Messages />,
        compfill: <Icon.MessagesFill />,
        notify: 0
    },
    {
        key: "Bookmarks",
        path: "/bookmarks",
        comp: <Icon.Bookmark />,
        compfill: <Icon.BookmarkFill />,
        notify: 0
    },
    {
        key: "Lists",
        path: "/lists",
        comp: <Icon.Lists />,
        compfill: <Icon.ListsFill />,
        notify: 0
    },
    {
        key: "Profile",
        path: "/profile",
        comp: <Icon.Profile />,
        compfill: <Icon.ProfileFill />,
        notify: 0
    },
    {
        key: "More",
        path: "/more",
        comp: <Icon.More />,
        compfill: <Icon.More />,
        notify: 0
    }
];
