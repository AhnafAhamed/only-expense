import {
  Button,
  Group,
  Stack,
  TextInput,
  useMantineTheme,
  Chip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useUserAuth } from "../context/AuthContext";
import supabase from "../utils/SupabaseClient";

function Form() {
  const theme = useMantineTheme();
  const { user } = useUserAuth();

  const form = useForm({
    initialValues: {
      description: "",
      amount: "",
    },
    validationRules: {
      description: (value) => value.length > 0,
      amount: (value) => value.length > 0,
    },
  });

  async function addExpense() {
    console.log(form.values);
    console.log({user: user.id});
    const { data, error } = await supabase
      .from("tasks")
      .insert({
        user_uid: user.id,
        description: form.values.description,
        amount: form.values.amount,
      })
      .select();
    data && form.reset();
    error && console.log(error);
  }
  return (
    <Stack align="center">
      <Group position="center" spacing="sm">
        <form onSubmit={form.onSubmit(addExpense)}>
          <TextInput
            label="Description"
            placeholder="Description"
            {...form.getInputProps("description")}
          />
          <TextInput
            label="Amount"
            placeholder="Amount"
            {...form.getInputProps("amount")}
          />
        </form>
      </Group>
      <Button
        type="submit"
        color={theme.colors.deepBlue[0]}
        onClick={addExpense}
      >
        Add
      </Button>
    </Stack>
  );
}

export default Form;
