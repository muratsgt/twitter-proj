import Navigation from "../components/Navigation";

export default {
    title: 'Navigation',
    args: {
        wide: true,
    }
};

export const Template = (args) => <Navigation {...args}></Navigation>;