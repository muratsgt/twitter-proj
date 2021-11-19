import Button from "../components/Button";
import NavButton from "../components/NavButton";
import Navigation from "../components/Navigation";
import TextTitle from "../components/TextTitle";
import ThemeButton from "../components/ThemeButton";
import Stack from "../components/Stack";
import { Home } from "../components/icons";

export default {
  title: 'Buttons'
};

export const Normal = () => (<Button>Save</Button>);

export const Nav = () => (<NavButton>
  <Home />
  <TextTitle>Home</TextTitle>
</NavButton>);

export const SideNavigation = () => (<Navigation selectedKey="home"></Navigation>);


export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet</ThemeButton>
    <ThemeButton full big>Tweet</ThemeButton>
  </Stack>
);