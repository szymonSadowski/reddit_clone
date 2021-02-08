import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
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
      <Flex alignItems="center">
        <Box textColor="#F0FFF4" mr={2} fontSize="24px">
          {data.me.username}
        </Box>
        <NextLink href="/create-post">
          <Link mr={2} fontSize="24px">create post</Link>
        </NextLink>
        <Button
          variant="link"
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
          colorScheme="black"
          fontSize="24px"
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex position="sticky" top={0} zIndex={1} bg="#2C7A7B" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <NextLink href="/">
          <Link>
            <Heading textColor="#F0FFF4">RedditClone</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
