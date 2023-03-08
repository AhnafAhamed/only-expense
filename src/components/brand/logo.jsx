import { Button, useMantineTheme } from "@mantine/core";

const Logo = () => {
  const theme = useMantineTheme();
  return (
    <Button
      radius={25}
      bg={theme.colors.darkGrey}
      px={16}
      py={12}
      sx={(theme) => ({
        height: "unset"
      })}
    >
      Only Expense
    </Button>
  );
};

export default Logo;
