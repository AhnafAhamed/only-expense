import { Button, Center, Stack, TextInput, Title } from "@mantine/core";
import supabase from "../utils/SupabaseClient";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";

// login component with supabase magic link
function Login() {
  const [email, setEmail] = useState("");
  async function signInWithEmail(email) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
    error && console.log(error);
    data && console.log(data);
  }

  supabase.auth.onAuthStateChange(async (event, session) => {
    console.log(event, session)
    if(event === 'SIGNED_IN') {
      const { data: { user } } = await supabase.auth.getUser()
    }
  })

  return (
    <Center>
      <Title order={1}>Login</Title>
      <Stack direction="column" spacing="md">
        <TextInput
          email={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          icon={<IconAt />}
          placeholder="Enter Email"
        ></TextInput>
        <Button onClick={() => signInWithEmail(email)}>Login</Button>
      </Stack>
    </Center>
  );
}

export default Login;