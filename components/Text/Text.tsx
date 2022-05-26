import { styled } from "../../styles/stiches.config";
import { textStyle } from "../../styles/text";

export const Text = styled("span", {
  margin: "0",
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    variant: {
      heading: textStyle.heading,
      label: textStyle.label,
      body: textStyle.body,
      labelDescription: textStyle.labeDescription,
      labelEmphasis: textStyle.labelEmphasis,
      deck: textStyle.deck,
    },
    color: {
      inherit: {
        color: "inherit",
      },
      base: {
        color: "$textBase",
      },
      muted: {
        color: "$textMuted",
      },
      highlight: {
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
  defaultVariants: {
    variant: "body",
    color: "inherit",
    align: "left",
  },
});
