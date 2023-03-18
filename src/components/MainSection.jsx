import { useContext, useEffect } from "react";
import { Flex } from "@mantine/core";
import Settings from "./settings/Settings";
import { ViewToggleContext } from "../context/ViewToggleContext";
import Tracker from "./tracker/Tracker";

const MainSection = () => {
  const { isSettingsView } = useContext(ViewToggleContext)

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
      {isSettingsView ? <Settings/> : <Tracker/>}
    </Flex>
  );
};

export default MainSection;
