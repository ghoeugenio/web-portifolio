import {
  Box,
  Text,
  useColorModeValue,
  Fade,
  ScaleFade,
} from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "../../../context";
import { ContextType } from "../../../types";

import { useHover } from "../../../hooks";
import Background from "../../../assets/background.jpg";
import { TextAnimation } from "../../atoms/TextAnimation";

export const Home = () => {
  const { isMobile, transitionText } = useContext(AppContext) as ContextType;

  const bgBannerColor = useColorModeValue(
    "opacityBackgroundWhite",
    "opacityBackgroundDark"
  );

  const [hoverRef, isHovered] = useHover();

  return (
    <Box
      backgroundImage={Background}
      backgroundPosition="center"
      minHeight="700"
      display="flex"
      flex="1"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg={bgBannerColor}
        borderRadius="20"
        justifyContent="center"
        minWidth={isMobile ? "20rem" : "40rem"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        whiteSpace="nowrap"
        transition="background-color 200ms linear"
      >
        <TextAnimation
          text="titleBanner"
          transition={transitionText}
          props={{
            fontFamily: "Raleway",
            pt: "2rem",
          }}
        />
        <Text
          fontFamily="Raleway"
          fontSize={{
            base: "2.5rem",
            md: "3rem",
            lg: "4rem",
          }}
          fontWeight="700"
          color="secondaryDark"
          lineHeight={isMobile ? "2.5rem" : "initial"}
        >
          Gustavo{isMobile ? <br /> : " "}Eugênio
        </Text>

        <Box
          display="flex"
          flexFlow={isMobile ? "column" : "row"}
          minWidth={isMobile ? "10rem" : "23.6rem"}
          mt="1.5rem"
          mb="1rem"
          alignItems="center"
          ml={isMobile ? "0rem" : "5rem"}
        >
          <TextAnimation
            text="subtitleBanner"
            transition={transitionText}
            props={{
              fontFamily: "Raleway",
              fontSize: "1.5rem",
              fontWeight: "700",
              mr: "0.5rem",
            }}
          />
          <Box ref={hoverRef}>
            {isHovered && !isMobile ? (
              <Fade in={isHovered} unmountOnExit>
                <Text
                  fontFamily="Raleway"
                  fontSize="1.5rem"
                  fontWeight="700"
                  color="alterSecondary"
                >
                  Full Cycle
                </Text>
              </Fade>
            ) : (
              <ScaleFade in={!isHovered || isMobile}>
                <Text
                  fontFamily="Raleway"
                  fontSize="1.5rem"
                  fontWeight="700"
                  color="alterSecondary"
                >
                  Full Stack
                </Text>
              </ScaleFade>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
