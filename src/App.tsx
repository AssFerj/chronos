import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Countdown } from "./components/Countdown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import "./styles/global.css";
import "./styles/theme.css";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

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
        <Countdown />
      </Container>

      <Container>
        <form className="form" method="post">
          <div className="formRow">
            <DefaultInput
              type="text"
              name="task"
              id="task"
              labelText="task"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>time</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton
              type="button"
              icon={<PlayCircleIcon />}
              color="green"
            />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export { App };
