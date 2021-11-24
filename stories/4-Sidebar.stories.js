import Sidebar from "../layout/Sidebar";

export default {
    title: 'Sidebar',
    args: {
        wide: true,
    }
};

const Template = (args) => <Sidebar {...args}></Sidebar>;