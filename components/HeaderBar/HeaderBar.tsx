import { ReactNode } from "react";
import { styled } from "../../styles/stiches.config";
import { textStyle } from "../../styles/text";
interface HeaderBarProps {
  links?: ReactNode;
  auth?: ReactNode;
}

export function HeaderBar({ links, auth }: HeaderBarProps) {
  return (
    <Container>
      <LinksContainer>{links}</LinksContainer>
      <AuthContainer>{auth}</AuthContainer>
    </Container>
  );
}

const Container = styled("nav", {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "$backgroundContainer",
  borderBottom: "1px solid $borderBase",
  overflow: "hidden",
  padding: "$16 $pageMarginX",
  justifyContent: "space-between",
  alignItems: "center",
  "& a": {
    textDecoration: "none",
    ...textStyle.labelEmphasis,
    color: "$textHighlight",
    transition: "all 0.4s ease-in",
  },
  "& a:hover": {
    textDecoration: "underline",
    color: "$text",
  },
});

const LinksContainer = styled("div", {
  display: "flex",
  flex: 1,
  gap: "$12",
});

const AuthContainer = styled("div", {
  display: "flex",
});
