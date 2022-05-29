import { createStitches } from "@stitches/react";
import { makeScales } from "./typePairs";


 
interface cssProps { 
  [key: string]: string 
}
const scaleSteps = makeScales();
const typeSteps : cssProps = {} 

for (const step of Object.keys(scaleSteps.typeScale)) {
  typeSteps[`step-${step}`] = scaleSteps.typeScale[parseInt(step)].clamp
}

const stitches = createStitches({
  theme: {
    colors: {
      white: "#fff",
      graycool100: "#ebeef3",
      graycool600 : '#4A5578',
      graycool900: "#0f101b",
      gray25: "#f9fbfa",
      gray500: "#667085",
      gray600: "#354356",
      gray900: "#101828",
      buttonBaseBackgroundPrimary : "$gray600",
      buttonHighlightBackgroundPrimary  : "$gray900",
      buttonBaseTextPrimary : "$white",
      buttonBaseBackgroundSecondary : "$graycool100",
      buttonHighlightBackgroundSecondary  : "$gray500",
      buttonBaseTextSecondary : "$gray900",
      buttonHighlightTextSecondary : "$graycool100",
      text : "$graycool900",
      textHighlight: "$graycool600",
      textMuted: "$gray500",
      backgroundBase : "$gray25",
      backgroundContainer : "$white",
      borderBase : "$graycool100",
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
      112: "7rem",
      "pageMarginX": 'calc((1/12) * 100vw)'
    },
    fontSizes:typeSteps,
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


