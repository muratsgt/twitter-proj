import Navigation from "../components/Navigation";

export default {
    component: Navigation,
    title: 'Navigation',
};

const Template = (args) => <Navigation {...args}></Navigation>;

export const SideNavigation = Template.bind({});

SideNavigation.args = {
    wide: true,
    selectedKey: "Home"
};