import { MainTemplate } from "../../templates/MainTemplate";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";

function Home() {
  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

export { Home };
