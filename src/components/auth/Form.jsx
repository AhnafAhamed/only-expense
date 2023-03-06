import {
  Box,
  useMantineTheme,
  Text,
  Stack,
  TextInput,
  Button,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  textInput: {
    input: {
      border: `1px solid ${theme.colors.darkGrey}`,
      outline: "none",
      color: theme.colors.darkGrey,
      padding: "10px 16px",
      lineHeight: 1.3,
    },
    "input:focus": {
      border: `1px solid ${theme.colors.darkGrey}`,
    },
  },

  button: {
    backgroundColor: theme.colors.darkGrey,
    alignSelf: "Center",
    padding: "12px 24px",
    fontWeight: 400,
  },

  toggleText: {
    textDecoration: 'underline'
  }
}));

const Form = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

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
          <Text fz="lg" fw="bold">
            Create an Account
          </Text>
          <Text fz="sm" color={theme.colors.darkGrey}>Let’s get started with creating your account.</Text>
        </Stack>
        <Stack>
          <Stack>
            <TextInput className={classes.textInput} placeholder="Name" />
            <TextInput className={classes.textInput} placeholder="Email" />
            <TextInput className={classes.textInput} placeholder="Password" />
          </Stack>
          <Text fz="sm" color={theme.colors.darkGrey}>
            Already have an account? <span className={classes.toggleText}>Sign In</span>
          </Text>
        </Stack>
        <Button className={classes.button}>Create Account</Button>
      </Stack>
    </Box>
  );
};

export default Form;
