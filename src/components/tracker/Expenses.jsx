import {
  Button,
  Stack,
  Flex,
  Text,
  useMantineTheme,
  Modal,
  TextInput,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CashIcon from "../icons/CashIcon";

const Expenses = () => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding={24}
        centered
      >
        <Paper
          sx={() => ({
            display: "flex",
            flexDirection: "column",
          })}
        >
          <Text
            weight={700}
            align="center"
            size={32}
            color={theme.colors.darkGrey}
            mb={40}
          >
            Expenses
          </Text>
          <Flex columnGap={20} mb={40}>
            <TextInput radius={25} placeholder="Description"></TextInput>
            <TextInput
              radius={25}
              placeholder="Amount"
              type="number"
            ></TextInput>
          </Flex>
          <Button sx={() => ({ alignSelf: "center", minWidth: '200px' })} radius={25}>Save</Button>
        </Paper>
      </Modal>
      <Stack align="flex-start" spacing={12}>
        <Text>Your total Expenses</Text>
        <Text size={74}>$ 2,499</Text>
        <Button
          onClick={open}
          leftIcon={<CashIcon />}
          radius={25}
          px={12}
          py={8}
          bg={theme.colors.darkGrey[0]}
          h="auto"
        >
          Add Expense
        </Button>
      </Stack>
    </>
  );
};

export default Expenses;
