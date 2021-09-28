/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

import PaymentModal from "bitcoin_payment_module_modal";
import { dummyGoodsMap } from "../../../common/utils/dummyData";

const Container = styled.div``;

const GoodsInfo = () => {
  const router = useRouter();
  const { goodsId } = router.query;

  const [goods, setGoods] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setGoods(dummyGoodsMap[goodsId]);
  }, [goodsId]);

  return goods ? (
    <Container>
      <span>{goods.name}</span>
      <span>{goods.price}</span>
      <button
        type="button"
        onClick={() => {
          setVisible(true);
        }}
      >
        결제하기
      </button>
      <PaymentModal
        visible={visible}
        onClose={() => setVisible(false)}
        onEnd={(txid, address) => {
          router.push('/goods')
        }}
        userId={42}
        price={goods.price * 0.00000001}
      />
    </Container>
  ) : null;
};

export default GoodsInfo;
