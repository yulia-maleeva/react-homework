import React from "react";
import PropTypes from "prop-types";

const Container = ({
  width,
  height,
  direction,
  justify,
  align,
  gap,
  padding,
  text,
  blockAmount,
  blockWidth,
  blockHeight,
  blockDirection,
  blockGap,
  blockBackgroundColor,
  isLogo,
}) => {
  const ContainerStyle = {
    width,
    height,
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
    padding,
    backgroundColor: "#D9D9D9",
  };

  const logoStyle = {
    width: 180,
    height: 37,
    backgroundColor: "#F1F2AE",
  };

  const BlockContainerStyle = {
    display: "flex",
    flexDirection: blockDirection,
    gap: blockGap,
  };

  const BlockStyle = {
    width: blockWidth,
    height: blockHeight,
    backgroundColor: blockBackgroundColor,
  };

  let logoBlock;

  if (isLogo) {
    logoBlock = <div style={logoStyle}></div>;
  }

  let items = [];

  if (blockAmount) {
    for (let i = 0; i < blockAmount; i++) {
      let block = <div style={BlockStyle}></div>;
      items.push(block);
    }
    items = <div style={BlockContainerStyle}>{items}</div>;
  }

  return (
    <div style={ContainerStyle}>
      {logoBlock}
      <p style={{ textAlign: "center" }}>{text}</p>
      {items}
    </div>
  );
};

export default Container;

Container.propTypes = {
  text: PropTypes.string.isRequired,
};
