import { List, Paper, Stack, ThemeIcon, Title } from "@mantine/core";
import {
  IconCoin
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";

function Expenses() {
  const [expenses, setExpenses] = useState(null);
  async function fetchExpenses() {
    const { data, error } = await supabase
      .from("tasks")
      .select("description, amount");
      setExpenses(data);
  }
  useEffect(() => {
    fetchExpenses();
  }, []);
  return (
    <Stack>
      <Title order={3}>Expenses</Title>
      {expenses &&
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon size={24} radius="xl">
            <IconCoin size={16} />
          </ThemeIcon>
        }
      >
        {expenses.map((expense) => (

        <Paper bg='blue' p='xs' mb='4px'>
          <List.Item>
          {expense.description} - {expense.amount}
        </List.Item>
        </Paper>
        ))}
      </List>
}
    </Stack>
  );
}

export default Expenses;
