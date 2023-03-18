import { Avatar, createStyles, Flex } from "@mantine/core";
import Logo from "../brand/logo";
import { ViewToggleContext } from "../../context/ViewToggleContext";
import { useContext } from "react";

const useStyles = createStyles((theme) => ({
    header: {
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.bgGrey,
        padding: '16px 24px',
        borderRadius: '25px'
    }
  }))

const Header = () => {
  const {classes} = useStyles()
  const { toggle } = useContext(ViewToggleContext)
  return (
    <Flex className={classes.header}>
      <Logo/>
      <Avatar onClick={toggle} src='https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4'/>
    </Flex>
  );
};

export default Header;
