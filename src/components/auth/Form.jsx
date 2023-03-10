import {
  Box,
  useMantineTheme,
  Text,
  Stack,
  TextInput,
  Button,
  createStyles
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useToggle } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/SupabaseClient";

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
    fontSize: "16px",
    lineHeight: 1.2,
    height: "auto",
    border: "unset",

    "&:hover": {
      backgroundColor: theme.colors.darkGrey,
    },
  },

  toggleText: {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

const Form = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [isRegister, toggle] = useToggle();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  async function handleAuth() {
    // Check if the user selected the "register" option
    if (isRegister) {
      // Register the user with Supabase
      const { data, error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
        options: {
          data: {
            name: form.values.name,
          },
        },
      });
      // If an error occurred, log it to the console
      error && console.log(error);
      // Otherwise, redirect the user to the home page
      data && form.reset() && navigate("/")
    } else {
      // Login the user with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.values.email,
        password: form.values.password,
      });
      // Log the user's session to the console
      const { data: session } = await supabase.auth.getSession();
      session && console.log({ session });
      // If an error occurred, log it to the console
      error && console.log(error);
      // Otherwise, redirect the user to the home page
      session.session && navigate("/");
    }
  }

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
            {isRegister ? "Create an Account" : "Sign In"}
          </Text>
          <Text fz="sm" color={theme.colors.darkGrey}>
            {isRegister
              ? "Let’s get started with creating your account."
              : "Let’s start tracking your expenses"}
          </Text>
        </Stack>
        <form
          onSubmit={form.onSubmit(() => {
            handleAuth();
          })}
        >
          <Stack spacing={70}>
            <Stack>
              <Stack>
                {isRegister ? (
                  <TextInput
                    required
                    className={classes.textInput}
                    placeholder="Name"
                    value={form.values.name}
                    onChange={(event) =>
                      form.setFieldValue("name", event.currentTarget.value)
                    }
                  />
                ) : null}
                <TextInput
                  required
                  className={classes.textInput}
                  placeholder="user@email.com"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                />
                <TextInput
                  required
                  className={classes.textInput}
                  placeholder="Password"
                  type="password"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={
                    form.errors.password &&
                    "Password should include at least 6 characters"
                  }
                />
              </Stack>
              <Text
                fz="sm"
                color={theme.colors.darkGrey}
                sx={() => ({ alignSelf: "center" })}
              >
                {isRegister
                  ? "Already have an account? "
                  : "Don’t have an account? "}
                <span className={classes.toggleText} onClick={toggle}>
                  {isRegister ? "Sign In" : "Sign Up"}
                </span>
              </Text>
            </Stack>
            <Button type="submit" className={classes.button}>
              {isRegister ? "Create Account" : "Sign In"}
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Form;
