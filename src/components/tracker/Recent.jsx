import { Divider, Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import DeleteIcon from "../icons/DeleteIcon";
import MoneyIcon from "../icons/MoneyIcon";

const Recent = () => {
  const theme = useMantineTheme();
  return (
    <Stack>
      <Flex columnGap={100}>
        <Text color={theme.colors.darkGreyShade}>Recent Transaction</Text>
        <Text weight={500}>See all...</Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        sx={() => ({
          borderBottom: "1px solid black",
        })}
      >
        <MoneyIcon />
        <Text> Cake</Text>
        <Text> $20 </Text>
        <DeleteIcon />
      </Flex>
    </Stack>
  );
};

export default Recent;
