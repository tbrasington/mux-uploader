import type { NextPage } from "next";
import { Bubble } from "../components/Bubble";
import { Button } from "../components/Button";
import { styled } from "../styles/stiches.config";

const Login: NextPage = () => {
  return (
    <Container>
      <Bubble
        label="Mux uploader"
        value="Upload and browse videos stored in Mux"
      >
        <Button>Sign in</Button>
      </Bubble>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: `0 $pageMarginX`,
  background: `$backgroundBase`,
  width: "100%",
  minHeight: "100vh",
});
export default Login;
