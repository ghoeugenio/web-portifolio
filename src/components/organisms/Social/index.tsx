import { useColorModeValue, Box, Button, Link, Image } from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "../../../context";
import { ContextType } from "../../../types";
import { TextAnimation } from "../../atoms/TextAnimation";
import email from "../../../assets/email.png";

export const Social = () => {
  const bgColor = useColorModeValue("alterPrimary", "primaryDark");
  const { isMobile, transitionText } = useContext(AppContext) as ContextType;

  return (
    <Box bgGradient="linear(to-b, alterSecondaryLight, alterSecondary)">
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        backgroundColor={bgColor}
        alignItems="center"
        mt="2rem"
        mb="2rem"
        borderRadius="1rem"
        marginX={isMobile ? "5rem" : "25rem"}
        minWidth={isMobile ? "0rem" : "25rem"}
        minHeight="10rem"
      >
        <TextAnimation
          transition={transitionText}
          text="contact"
          props={{
            fontFamily: "Raleway",
            mb: "1rem",
            mt: "1rem",
            fontSize: "2rem",
            color: "secondary",
            fontWeight: "bold",
          }}
        />
        <Box
          display="flex"
          justifyContent="space-evenly"
          flexDirection={isMobile ? "column" : "row"}
          mb="2rem"
        >
          <Link
            href="https://www.linkedin.com/in/gustavo-eug%C3%AAnio-567867180/"
            mx="1rem"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              mb="1rem"
              width="7rem"
              height="6rem"
              bg="secondary"
              borderRadius="5"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              fontFamily="Raleway"
              fontWeight="bold"
              color="white"
              _hover={{
                bg: "secondaryDark",
              }}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="logo"
                width="3rem"
              />
              LinkedIn
            </Button>
          </Link>
          <Link
            href="https://github.com/ghoeugenio"
            mx="1rem"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              mb="1rem"
              width="7rem"
              height="6rem"
              bg="secondary"
              borderRadius="5"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              fontFamily="Raleway"
              fontWeight="bold"
              color="white"
              _hover={{
                bg: "secondaryDark",
              }}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="logo"
                width="3rem"
              />
              Github
            </Button>
          </Link>
          <Link
            href="mailto:ghoeugenio@gmail.com"
            mx="1rem"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              mb="1rem"
              width="7rem"
              height="6rem"
              bg="secondary"
              borderRadius="5"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              fontFamily="Raleway"
              fontWeight="bold"
              color="white"
              _hover={{
                bg: "secondaryDark",
              }}
            >
              <Image src={email} alt="logo" width="3rem" />
              E-mail
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
