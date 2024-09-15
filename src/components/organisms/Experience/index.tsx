import {
  useColorModeValue,
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "../../../context";
import { experienceData } from "../../../services/data";
import Thumbnail from "../../../assets/thumbnail.png";
import DrinkifyBanner from "../../../assets/drinkify.png";
import IgiotaBanner from "../../../assets/igiota.png";
import { ContextType } from "../../../types";
import { TextAnimation } from "../../atoms/TextAnimation";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const bgColor = useColorModeValue("alterPrimary", "primaryDark");
  const { isMobile, transitionText } = useContext(AppContext) as ContextType;

  const { t } = useTranslation();

  return (
    <Box
      bgGradient="linear(to-b, primaryLight, alterSecondaryLight)"
      paddingX={isMobile ? "2rem" : "25rem"}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        backgroundColor={bgColor}
        alignItems="center"
        mt="2rem"
        mb="2rem"
        borderRadius="1rem"
        minHeight="20rem"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb="3rem"
        >
          <TextAnimation
            transition={transitionText}
            text="personalProjects"
            props={{
              fontFamily: "Raleway",
              mb: "1rem",
              mt: "1rem",
              color: "secondary",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
          <Box flexDir={isMobile ? "column" : "row"} display="flex">
            <Popover>
              <PopoverTrigger>
                <Image
                  src={DrinkifyBanner}
                  w={isMobile ? "12rem" : "21rem"}
                  h={isMobile ? "7rem" : "11rem"}
                  borderRadius="1rem"
                  alignSelf="center"
                  minWidth="8rem"
                  backgroundColor="transparent"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Link
                    href="https://www.drinkify.com.br/"
                    fontFamily="Raleway"
                  >
                    {t("drinkifyclick")}
                  </Link>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Box mr="2rem" pt="2rem" />
            <Popover>
              <PopoverTrigger>
                <Image
                  src={IgiotaBanner}
                  w={isMobile ? "12rem" : "21rem"}
                  h={isMobile ? "7rem" : "11rem"}
                  borderRadius="1rem"
                  alignSelf="center"
                  minWidth="8rem"
                  backgroundColor="transparent"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <TextAnimation
                    transition={transitionText}
                    text="igiotaclick"
                    props={{
                      fontFamily: "Raleway",
                    }}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <TextAnimation
          transition={transitionText}
          text="experience"
          props={{
            fontFamily: "Raleway",
            mb: "1rem",
            mt: "1rem",
            fontSize: "2rem",
            color: "secondary",
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
        <Box
          flexDir={isMobile ? "column" : "row"}
          display="flex"
          justifyContent="center"
          flexWrap={isMobile ? "nowrap" : "wrap"}
          px={isMobile ? "0rem" : "5rem"}
          mb="3rem"
        >
          {experienceData.map((item) => (
            <Box mr="1rem" mt="1rem">
              <Popover>
                <PopoverTrigger>
                  <Button
                    bg="secondary"
                    color="white"
                    _hover={{
                      bg: "secondaryDark",
                    }}
                    width="7rem"
                  >
                    {item.name}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <TextAnimation
                      transition={transitionText}
                      text={item.description}
                      props={{
                        fontFamily: "Raleway",
                        mb: "1rem",
                        mt: "1rem",
                      }}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb="3rem"
        >
          <TextAnimation
            transition={transitionText}
            text="Workshops"
            props={{
              fontFamily: "Raleway",
              mb: "1rem",
              mt: "1rem",
              color: "secondary",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          />
          <Popover>
            <PopoverTrigger>
              <Image
                src={Thumbnail}
                w={isMobile ? "12rem" : "21rem"}
                h={isMobile ? "7rem" : "11rem"}
                borderRadius="1rem"
                alignSelf="center"
                minWidth="8rem"
                backgroundColor="transparent"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Link
                  href="https://www.youtube.com/watch?v=SVfyEYpAuZE"
                  fontFamily="Raleway"
                >
                  {t("watchworkshop")}
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb="2rem"
        >
          <TextAnimation
            transition={transitionText}
            text="Games"
            props={{
              fontFamily: "Raleway",
              mb: "1rem",
              mt: "1rem",
              fontSize: "2rem",
              color: "secondary",
              fontWeight: "bold",
            }}
          />
          <Popover>
            <PopoverTrigger>
              <Box
                bg="primary"
                pt="1rem"
                px="0.5rem"
                borderRadius="5"
                _hover={{
                  bg: "primaryLight",
                  cursor: "pointer",
                }}
              >
                <Text
                  fontFamily="Raleway"
                  fontSize="2rem"
                  color="orange"
                  fontWeight="bold"
                  textAlign="center"
                >
                  Geometry War
                </Text>
              </Box>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Link
                  href="https://www.youtube.com/watch?v=DipFg8Xww4I"
                  fontFamily="Raleway"
                  fontWeight="bold"
                >
                  Teaser (Youtube)
                </Link>
                <Link
                  href="https://github.com/ghoeugenio/gamein/blob/master/Original/Geometry_War.rar"
                  fontFamily="Raleway"
                  fontWeight="bold"
                >
                  Game (Github)
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
};
