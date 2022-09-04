import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = (props) => {
  return (
    <Box flex={4} p={4}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

Feed.propTypes = {};

export default Feed;
