import { Flex } from "@mantine/core";
import Expenses from "./Expenses";
import Recent from "./Recent";

const MainSection = () => {
  return (
    <Flex
      justify="space-between"
      sx={(theme) => ({
        backgroundColor: theme.colors.bgGrey,
        borderRadius: 25,
        width: "100%",
        padding: "24px",
        minHeight: "315px",
        marginTop: "42px",
        color: theme.colors.darkGrey
      })}
    >
      <Expenses />
      <Recent />
    </Flex>
  );
};

export default MainSection;
