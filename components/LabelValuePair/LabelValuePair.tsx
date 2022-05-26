import { styled } from "../../styles/stiches.config";
import { textStyle } from "../../styles/text";

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
      <Text variant="label" align={align}>
        {label}
      </Text>
      <Text variant="value" align={align}>
        {value}
      </Text>
    </Container>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Text = styled("span", {
  flex: 1,
  ...textStyle.labeDescription,
  variants: {
    variant: {
      label: {
        color: "$text",
      },
      value: {
        color: "$textHighlight",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
  defaultVariants: { align: "left", variant: "value" },
});
