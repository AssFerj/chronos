import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading>CONTENT</Heading>
      </Container>

      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}

export { App };
