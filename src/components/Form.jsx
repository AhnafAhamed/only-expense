import { Button, Group, Stack, TextInput, useMantineTheme, Chip } from "@mantine/core";

function Form() {
  const theme = useMantineTheme();
  function addExpense() {
    
  }
  return (
    <Stack align="center">
      <Group position="center" spacing="sm">
          <TextInput label="Description" placeholder="Description" />
          <TextInput label="Amount" placeholder="Amount" />
      </Group>
      <Button type="submit" color={theme.colors.deepBlue[0]} onClick={addExpense} >Add</Button>
    </Stack>
  );
}

export default Form;
