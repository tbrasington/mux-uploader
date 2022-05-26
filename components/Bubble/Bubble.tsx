import { styled } from "../../styles/stiches.config";
import { Text } from "../Text";
interface BubbleProps {
  label?: string;
  value?: string;
  children?: React.ReactNode;
}

export function Bubble({ label, value, children }: BubbleProps) {
  return (
    <Container>
      <TextContainer>
        <Text variant={"heading"} color="base">
          {label}
        </Text>
        <Text variant={"deck"} color="muted">
          {value}
        </Text>
      </TextContainer>
      <ChildContainer>{children}</ChildContainer>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$backgroundContainer",
  borderRadius: "$small",
  boxShadow: "$mid",
  overflow: "hidden",
  padding: "$32",
});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "100%",
  gap: "$4",
  maxWidth: "72ch",
});

const ChildContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "$24 0 0 0",
  width: "100%",
  gap: "$4",
});
