import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <Triangle
      height="100"
      width="100"
      color="#9e4da9"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loading;