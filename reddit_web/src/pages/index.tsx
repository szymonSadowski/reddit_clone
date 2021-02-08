import { withUrqlClient } from "next-urql";
import { Layout } from "../components/Layout";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/Link";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, PhoneIcon } from "@chakra-ui/icons";
import { UpvotePart } from "../components/UpvotePart";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
  });
  const [{ data, fetching }] = usePostsQuery({
    variables,
  });
  if (!fetching && !data) {
    return <div>no posts to show</div>;
  }
  return (
    <Layout variant="regular">
      <Flex align="center">
        <Heading>RedditClone</Heading>
        <NextLink href="/create-post">
          <Link ml="auto"> create post</Link>
        </NextLink>
      </Flex>
      <br></br>
      {!data && fetching ? (
        <div> loading...</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map((p) => (
            <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
             <UpvotePart post={p}></UpvotePart>
              <Box>
                <Heading fontSize="xl">{p.title}</Heading>
                <Text>POSTED BY {p.creator.username}</Text>
                <Text mt={4}>{p.textSnippet}...</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      )}
      {data && data.posts.hasMore ? (
        <Flex>
          <Button
            onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              });
            }}
            isLoading={fetching}
            m="auto"
            my={8}
          >
            load more
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
