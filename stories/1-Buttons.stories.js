import TextTitle from "../components/Text/TextTitle";
import ThemeButton from "../components/buttons/ThemeButton";
import { Home } from "../components/Icons";
import Button from "../components/buttons/Button";
import ProfileButton from "../components/buttons/Profilebutton";
import NavButton from "../components/Navigation/NavButton";

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
