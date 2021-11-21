import Button from "../components/Button";
import NavButton from "../components/NavButton";
import TextTitle from "../components/TextTitle";
import ThemeButton from "../components/ThemeButton";
import { Home } from "../components/icons";
import ProfileButton from "../components/ProfileButton";


export default {
  title: 'Buttons',
  args: {
    full: false,
    big: false
  }
};

export const Normal = (args) => (<Button {...args}>Save</Button>);

export const Nav = (args) => (<NavButton {...args}>
  <Home />
  <TextTitle>Home</TextTitle>
</NavButton>);

export const Theme = (args) => (
  <ThemeButton {...args}>Tweet</ThemeButton>
);

export const Profile = (args) => (<ProfileButton {...args}></ProfileButton>);
