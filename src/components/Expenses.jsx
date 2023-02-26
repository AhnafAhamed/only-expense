import { List, Stack, ThemeIcon, Title } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconDotsVertical,
} from "@tabler/icons-react";

function Expenses() {
  return (
    <Stack>
      <Title order={3}>Expenses</Title>
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item>
          Clone or download repository from GitHub{" "}
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconDotsVertical size={16} />
          </ThemeIcon>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size={16} />
            </ThemeIcon>
          }
        >
          Submit a pull request once you are done
        </List.Item>
      </List>
    </Stack>
  );
}

export default Expenses;
