import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { PostsQuery, useVoteMutation } from "../generated/graphql";

interface UpvotePartProps {
  post: PostsQuery["posts"]["posts"][0];
}

export const UpvotePart: React.FC<UpvotePartProps> = ({ post }) => {
  const [, vote] = useVoteMutation();
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" mr={4}>
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          await vote({
            postId: post.id,
            value: 1,
          });
        }}
        colorScheme={post.voteStatus === 1 ? "green" : undefined}
        aria-label="upvote"
        size="sm"
        icon={<ArrowUpIcon />}
      />
      {post.points}
      <IconButton
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          await vote({
            postId: post.id,
            value: -1,
          });
        }}
        colorScheme={post.voteStatus === -1 ? "red" : undefined}
        aria-label="downvote"
        size="sm"
        icon={<ArrowDownIcon />}
      />
    </Flex>
  );
};
