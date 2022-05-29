
interface ScaleProps {
   [key: string]: number;
}

const scaleSteps : ScaleProps= {
  "minor-second": 1.067,
  "major-second": 1.125,
  "minor-third": 1.2,
  "major-third": 1.25,
  "perfect-fourth": 1.333,
  "augmented-fourth": 1.414,
  "perfect-fifth": 1.5,
  "golden-ratio": 1.618,
  "major-sixth": 1.667,
  "minor-seventh": 1.778,
  "major-seventh": 1.875,
  octave: 2,
};

function round(num: number) {
  return Math.round(num * 100) / 100;
}

function clampBuilder(minWidthPx: number, maxWidthPx: number, minSizePx: number, maxSizePx: number) {
  const pixelsPerRem = 16;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const minSize = minSizePx / pixelsPerRem;
  const maxSize = maxSizePx / pixelsPerRem;

  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;

  const min = `${round(minSize)}rem`;
  const val = `${round(yAxisIntersection)}rem + ${round(slope * 100)}vw`;
  const max = `${round(maxSize)}rem`;

  return `clamp(${min}, ${val}, ${max})`;
}

// function generateCSS(system: { typeScale: any; }) {
//   let css = "";

//   const { typeScale } = system;

//   for (const step of Object.keys(typeScale)) {
//     css += `--step-${step}: ${typeScale[step].clamp};`;
//   }
//   return css;
// }

interface viewPortProps {
    width: number,
    fontSize: number,
    typeScale: number,
}


  interface SystemProps {
    typeScale: systemItemProps[];
  }

  interface systemItemProps {
    min : number
    max: number
    clamp : string
  }




function buildFluidDesignSystem(opts: { 
    typeScaleSteps: number[];   minViewport: viewPortProps; maxViewport: viewPortProps; }) {
  const {
    minViewport,
    maxViewport,
    typeScaleSteps,
  } = opts;

   const system :SystemProps = {
    typeScale: []
  }


  const minFluidTypeStep = typeScaleSteps[0];
  const maxFluidTypeStep = typeScaleSteps[typeScaleSteps.length - 1];

  for (let i = minFluidTypeStep; i <= maxFluidTypeStep; i++) {
    const valueMin = round(
      minViewport.fontSize * Math.pow(minViewport.typeScale, i)
    );

    const valueMax = round(
      maxViewport.fontSize * Math.pow(maxViewport.typeScale, i)
    );

    system.typeScale[i] = {
      min: valueMin,
      max: valueMax,
      clamp: clampBuilder(
        minViewport.width,
        maxViewport.width,
        valueMin,
        valueMax
      ),
    };
  }
 
  return {
    system  : system
  };
}


export function makeScales() {


  const config = {
    minViewport: {
      width: 320,
      fontSize: 16,
      typeScale: scaleSteps["augmented-fourth"],
    },
    maxViewport: {
      width: 1440,
      fontSize: 20,
      typeScale: scaleSteps["augmented-fourth"],
    },
  };

   const fluidDesignSystem = buildFluidDesignSystem({
    ...config,
    typeScaleSteps: [-2, -1, 0, 1, 2, 3, 4, 5]
  });

 return fluidDesignSystem.system

}