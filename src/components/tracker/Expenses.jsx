import { Button, Stack, Text, useMantineTheme } from "@mantine/core";
import CashIcon from "../icons/CashIcon";

const Expenses = () => {
    const theme = useMantineTheme()
    console.log(theme.colors.darkGrey[0])
    return (
        <Stack align="flex-start" spacing={12}>
            <Text>Your total Expenses</Text>
            <Text size={74}>$ 2,499</Text>
            <Button leftIcon={<CashIcon/>} radius={25} px={12} py={8} bg={theme.colors.darkGrey[0]} h="auto">
                Add Expense
            </Button>
        </Stack>
    )
}

export default Expenses;