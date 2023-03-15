import { Button, Container, Stack, Title } from "@mantine/core";
import Expenses from "../components/Expenses";
import Header from "../components/Header/Header";
import MainSection from "../components/tracker/MainSection";

const Dashboard = () => {
  return (
    <Container size="sm" mt={80} px={0}>
      <Stack align="center">
        <Header />
        <MainSection/>
      </Stack>
    </Container>
  );
};

export default Dashboard;
