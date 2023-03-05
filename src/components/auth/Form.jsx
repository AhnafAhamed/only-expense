import { Box, Flex, useMantineTheme, Text, Stack, TextInput, Button } from "@mantine/core";

const Form = () => {
  const theme = useMantineTheme();
  return (
    <Box
      p={40}
      sx={(theme) => ({
        backgroundColor: theme.colors.bgGrey[0],
        padding: "40px",
        borderRadius: "25px",
      })}
    >
      <Stack justify="space-around" align="strech" spacing={42.5}>
        <Stack align="center" spacing={10}>
          <Text fz="lg" fw='bold'>Create an Account</Text>
          <Text fz="sm">Let’s get started with creating your account.</Text>
        </Stack>
        <Stack>
            <TextInput placeholder="Name"/>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
        </Stack>
        <Button>Submit</Button>
      </Stack>
    </Box>
  );
};

export default Form;
