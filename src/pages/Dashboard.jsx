import { Button, Container, Stack, Title } from "@mantine/core";
import Expenses from "../components/Expenses";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection";
import ViewToggleContext from "../context/ViewToggleContext";

const Dashboard = () => {
  return (
    <ViewToggleContext>
    <Container size="sm" mt={80} px={0}>
      <Stack align="center">
        <Header />
        <MainSection/>
      </Stack>
    </Container>
    </ViewToggleContext>
  );
};

export default Dashboard;
