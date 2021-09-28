import React from "react";
import styled from "styled-components";
import { dummyGoodsList } from "../../../common/utils/dummyData";
import GoodsItem from "../component/GoodsItem";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoodsList = () => {
  return (
    <Container>
      {dummyGoodsList.map((item) => (
        <GoodsItem id={item.id} item={item} />
      ))}
    </Container>
  );
};

export default GoodsList;
