import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";
import NextLink from "next/Link";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number
}
export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId
}) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if(meData?.me?.id !== creatorId) {
      return null;
  }
  return (
    <Box>
      <IconButton
        aria-label="delete post"
        size="md"
        icon={<DeleteIcon />}
        colorScheme="red"
        onClick={() => {
          deletePost({
            id,
          });
        }}
        mr={2}
      />
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          aria-label="edit post"
          size="md"
          icon={<EditIcon />}
          colorScheme="teal"
        />
      </NextLink>
    </Box>
  );
};
