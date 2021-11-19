import Button from "../components/Button";
import NavButton from "../components/NavButton";
import Navigation from "../components/Navigation";
import TitleBold from "../components/TitleBold";
import { Home } from "../components/icons";

export default {
  title: 'Buttons'
};

export const Normal = () => (<Button>Save</Button>);

export const Nav = () => (<NavButton>
  <Home />
  <TitleBold>Home</TitleBold>
</NavButton>);

export const Navi = () => (<Navigation selectedKey="home"></Navigation>);
