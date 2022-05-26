import { createStitches } from "@stitches/react";
const stitches = createStitches({
  theme: {
    colors: {
      white: "#fff",
      graycool100: "#ebeef3",
      graycool900: "#0f101b",
      gray25: "#f9fbfa",
      gray500: "#667085",
      gray600: "#354356",
      gray900: "#101828",
      buttonBaseBackgroundPrimary : "$gray600",
      buttonHighlightBackgroundPrimary  : "$gray900",
      buttonBaseTextPrimary : "$white",
      text : "$gray500",
      textAccent: "$gray600",
      textEmphasis: "$gray900",
      backgroundBase : "$gray25",
      backgroundContainer : "$white",
    },
    space: {
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "5rem",
    },
    fontSizes: {
      "step--2": "clamp(0.69rem, calc(0.64rem + 0.25vw), 0.87rem)",
      "step--1": "clamp(0.83rem, calc(0.77rem + 0.30vw), 1.04rem)",
      "step-0": "clamp(1.00rem, calc(0.93rem + 0.36vw), 1.25rem)",
      "step-1": "clamp(1.20rem, calc(1.11rem + 0.43vw), 1.50rem)",
      "step-2": "clamp(1.44rem, calc(1.34rem + 0.51vw), 1.80rem)",
      "step-3": "clamp(1.73rem, calc(1.60rem + 0.62vw), 2.16rem)",
      "step-4": "clamp(2.07rem, calc(1.93rem + 0.74vw), 2.59rem)",
      "step-5": "clamp(2.49rem, calc(2.31rem + 0.89vw), 3.11rem)",
    },
    fonts: {
      inter: "Inter var, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      interRegular: 400,
      interSemiBold: 600,
      interMedium: 500,
      interBold: 700,
    },
    lineHeights: {
      interHeading: 1.2,
      interBody: 1.4,
      monoHeading: 1.2,
      monoBody: 1.4,
    },
    letterSpacings: {},
    sizes: {
      4: "0.25rem",
      8: "5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "5rem",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      small: "4px",
      mid: "8px",
    },
    shadows: {
      small: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF",
      mid: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      heavy: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});

const { styled, globalCss, getCssText, theme, css } = stitches;
export { styled, getCssText, globalCss, theme, css };
