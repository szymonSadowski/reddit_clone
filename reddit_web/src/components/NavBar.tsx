import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/Link";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
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
        <Flex p={4}>
          <Box ml={"auto"}>
            <NextLink href="/login">
              <Link color="#F0FFF4" mr={2} fontSize="24px">
                login
              </Link>
            </NextLink>
            <NextLink href="/register">
              <Link color="#F0FFF4" fontSize="24px">
                {" "}
                register{" "}
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </>
    );
  } else {
    body = (
      <Flex alignItems="center">
        <Text textColor="#F0FFF4" mr={2} fontSize="24px">
          {data.me.username}
        </Text>
        <NextLink href="/create-post">
          <Link mr={2} fontSize="24px">
            create post
          </Link>
        </NextLink>
        <Button
          variant="link"
          onClick={async () => {
            await logout();
            router.reload();
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
