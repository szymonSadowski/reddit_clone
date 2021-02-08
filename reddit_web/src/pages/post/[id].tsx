import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { usePostQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { Layout } from "../../components/Layout";
import { Box, Heading } from "@chakra-ui/react";

const Post = ({}) => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
  if (fetching) {
    return (
      <Layout variant="regular">
        <div>loading...</div>
      </Layout>
    );
  }
  if (!data?.post) {
      return (
        <Layout variant="regular">
            <Heading>Could not find post</Heading>
        </Layout>
      );
  }
  return (
    <Layout variant="regular">
      <Heading mb={4}>{data.post.title}</Heading>
      <br></br>
      {data.post.text}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
