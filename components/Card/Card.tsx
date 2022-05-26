import { styled } from "../../styles/stiches.config";
import { LabelValuePair } from "../LabelValuePair";
import NextImage from "next/image";
interface CardProps {
  uploaded?: string;
  duration?: string;
  image?: string;
  unoptimized?: boolean;
}

export function Card({
  uploaded,
  duration,
  image,
  unoptimized = false,
}: CardProps) {
  return (
    <Container>
      <ImageContainer>
        {image && (
          <NextImage src={image} layout="fill" unoptimized={unoptimized} />
        )}
      </ImageContainer>
      <TextContainer>
        <LabelValuePair label="Uploaded" value={uploaded} />
        <LabelValuePair label="Duration" value={duration} align="right" />
      </TextContainer>
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
  transition: "all 0.4s ease-in",
  "&:hover": {
    boxShadow: "$heavy",
  },
});

const TextContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "$24 $24",
  width: "100%",
});

const ImageContainer = styled("div", {
  aspectRatio: "16/9",
  position: "relative",
  width: "100%",
});
