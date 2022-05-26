import React from "react";
import { styled, css } from "../../styles/stiches.config";
import { textStyle } from "../../styles/text";

export const ButtonStyle = css({
  transition: "background 0.2s ease-in-out, color 0.2s ease-in-out",
  margin: 0,
  border: "none",
  padding: "$12 $16",
  alignSelf: "flex-start",
  borderRadius: "$small",
  ...textStyle.labelEmphasis,
  textDecoration: "none",
  lineHeight: 1,
  variants: {
    height: {
      auto: { height: "auto" },
    },
    variant: {
      primary: {
        color: "$buttonBaseTextPrimary",
        backgroundColor: "$buttonBaseBackgroundPrimary",
        "&:hover": {
          backgroundColor: "$buttonHighlightBackgroundPrimary",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

/**
 * Primary UI component for user interaction
 */
export const Button = styled("button", {
  ...ButtonStyle,
});
