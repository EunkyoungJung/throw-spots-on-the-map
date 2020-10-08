import React from "react";
import styled from "styled-components";
import * as DateUtils from "../utils/DateUtils";

const Wrapper = styled.div``;
const Item = styled.div``;

const InformationInPopup = (props) => {
  const { data } = props;
  const columns = Object.keys(data);
  console.log("colcolco", columns);
  return (
    <Wrapper>
      {columns.map((col, idx) => (
        <Item id={idx}>{`● ${col}: ${data[col]}`}</Item>
      ))}
    </Wrapper>
  );
};

export default InformationInPopup;
