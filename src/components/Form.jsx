import { Button, Group, Stack, TextInput, useMantineTheme, Chip } from "@mantine/core";

function Form() {
  const theme = useMantineTheme();
  console.log(theme.colors.deepBlue[0])
  return (
    <Stack align="center">
      <Group position="center" spacing="sm">
          <TextInput label="Description" placeholder="Description" />
          <TextInput label="Amount" placeholder="Amount" />
      </Group>
      <Button type="submit" color={theme.colors.deepBlue[0]} >Add</Button>
    </Stack>
  );
}

export default Form;
