import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 8px;
  margin-bottom: 8px;
  padding: 12px;

  border: none;
  border-radius: 8px;

  background-color: #f2f2f2;
  box-shadow: #ececec;
  :hover {
    background-color: #ececec;
  }
`;

const Name = styled.span`
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.span`
  padding-left: 4px;

  font-size: 12px;
  font-weight: bold;
`;

const GoodsItem = ({ item }) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(`/goods/${item.id}`)}>
      <Name>{item.name} </Name>
      <Price>{item.price} satoshi</Price>
    </Container>
  );
};

export default GoodsItem;
