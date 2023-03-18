import { Button, Stack } from "@mantine/core";

const Navigation = () => {
  return (
    <Stack>
      <Stack>
        <Button>Personal Details</Button>
        <Button>Settings</Button>
      </Stack>
      <Button>Log Out</Button>
    </Stack>
  );
};

export default Navigation;
