import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/Link";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  let body = null;
  //loading
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <Flex bg="tomato" p={4}>
          <Box ml={"auto"}>
            <NextLink href="/login">
              <Link color="white" mr={2}>
                Login
              </Link>
            </NextLink>
            <NextLink href="/register">
              <Link color="white"> Register </Link>
            </NextLink>
          </Box>
        </Flex>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box color="white" mr={2}>
          {data.me.username}
        </Box>
        <Button
          variant="link"
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex position='sticky' top={0} zIndex={1} bg="tomato" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
