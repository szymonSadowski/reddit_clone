import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { usePostQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { Layout } from "../../components/Layout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { getPostFromUrl } from "../../utils/getPostFromUrl";
import { EditDeletePostButtons } from "../../components/EditDeletePostButtons";

const Post = ({}) => {
  const [{ data, fetching }] = getPostFromUrl();
  if (fetching) {
    return (
      <Layout variant="regular">
        <div>loading</div>
      </Layout>
    );
  }
  if (!data?.post) {
    return (
      <Layout variant="regular">
        <div>not found any posts</div>
      </Layout>
    );
  }

  return (
    <Layout variant="regular">
      <Flex mb={4}>
        <Heading>{data.post.title}</Heading>
        <Box ml="auto">
          <EditDeletePostButtons
            id={data.post.id}
            creatorId={data.post.creator.id}
          ></EditDeletePostButtons>
        </Box>
      </Flex>
      <Box mb={4} fontSize="24px">{data.post.text}</Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
