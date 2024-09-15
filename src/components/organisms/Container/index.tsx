import { Flex } from "@chakra-ui/react";
import { useContext } from "react";

import { AppContext } from "../../../context";
import { ContextType, Props } from "../../../types";

export const Container = ({ children }: Props) => {
  const { bgColor } = useContext(AppContext) as ContextType;
  return (
    <Flex w="full" flexDirection="column" bg={bgColor} transition="fade">
      {children}
    </Flex>
  );
};
