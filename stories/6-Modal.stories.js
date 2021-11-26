import { TweetModal } from "../modals/TweetModal";

export default {
    title: "Modals",
    args: {
        open: false,
    }
};

export const Tweet = (args) => (<TweetModal {...args}></TweetModal>);