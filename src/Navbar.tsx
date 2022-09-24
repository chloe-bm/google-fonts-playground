import React from "react";
import { styled, ThemeProvider, DarkTheme } from "baseui";
import { Theme } from "baseui/theme";
import { Button, KIND } from "baseui/button";
import Logo from "./components/Icons/Logo";
import { Block } from "baseui/block";
import Play from "./components/Icons/Play";
import Github from "./components/Icons/Github";

const Container = styled<"div", {}, Theme>("div", ({ $theme }) => ({
  height: "64px",
  background: $theme.colors.black,
  padding: "0 1.25rem",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  flex: "none",
}));

export default function () {
  return (
    // @ts-ignore
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <div style={{ color: "#ffffff" }}>
          <Logo size={36} />
        </div>
        <Block
          $style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          <Block>
            <Button
              size="compact"
              kind={KIND.tertiary}
              overrides={{
                StartEnhancer: {
                  style: {
                    marginRight: "4px",
                  },
                },
              }}
            >
              <Github size={32} />
            </Button>
          </Block>
        </Block>
      </Container>
    </ThemeProvider>
  );
}
