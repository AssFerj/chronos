import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Countdown } from "./components/Countdown";
import { DefaultInput } from "./components/DefaultInput";
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
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button type="button">Add</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export { App };
