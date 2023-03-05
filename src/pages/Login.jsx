import {
  useMantineTheme,
  Container,
  Image,
  Flex,
  Overlay,
  AspectRatio,
  Paper,
} from "@mantine/core";
import Form from "../components/auth/Form";
import authImage from "../assets/auth-image.avif";

const Login = () => {
  const theme = useMantineTheme();
  const textColor = theme.colors.darkGrey[0];

  return (
    <Flex h="100vh" align="center">
      <Container size="lg" px="md">
        <Flex align="center" columnGap={120}>
          <Form />
          <Paper pos='relative' maw={550} h={752} >
            <Paper >
              <Image radius='lg' height={752} src={authImage} />
              <Overlay radius='lg' color={theme.colors.darkGrey[0]} opacity={0.35} />
            </Paper>
          </Paper>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Login;
