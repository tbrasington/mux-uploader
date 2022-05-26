import { styled } from "../../styles/stiches.config";
import { Text } from "../Text";
interface LabelValueProps {
  label?: string;
  value?: string;
  align?: "left" | "right";
}

export function LabelValuePair({
  label,
  value,
  align = "left",
}: LabelValueProps) {
  return (
    <Container>
      <Text variant="labelDescription" align={align} color="muted">
        {label}
      </Text>
      <Text variant="labelDescription" align={align} color="base">
        {value}
      </Text>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});
