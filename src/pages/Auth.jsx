import {
  useMantineTheme,
  Container,
  Image,
  Flex,
  Overlay,
  Paper,
  Box,
  createStyles
} from "@mantine/core";
import Form from "../components/auth/Form";
import authImage from "../assets/auth-image.avif";
import Logo from "../components/brand/logo";

const useStyles = createStyles((theme) => ({
  logo: {
    position: 'absolute',
    left: '80px',
    top: '40px',
  }
}))

const Auth = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles()

  return (
    <Flex h="100vh" align="center">
      <Box sx={(theme) => ({
        height: "unset",
        position: 'absolute',
        left: '80px',
        top: '40px'
      })}>
      <Logo />
      </Box>
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

export default Auth;
