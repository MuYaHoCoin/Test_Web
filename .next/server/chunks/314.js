"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ template_GoodsList)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/utils/dummyData.js
var dummyData = __webpack_require__(900);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(651);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/feature/goods/component/GoodsItem.jsx




const Container = (external_styled_components_default()).div`
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
const Name = (external_styled_components_default()).span`
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: bold;
`;
const Price = (external_styled_components_default()).span`
  padding-left: 4px;

  font-size: 12px;
  font-weight: bold;
`;

const GoodsItem = ({
  item
}) => {
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    onClick: () => router.push(`/goods/${item.id}`),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Name, {
      children: [item.name, " "]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Price, {
      children: [item.price, " satoshi"]
    })]
  });
};

/* harmony default export */ const component_GoodsItem = (GoodsItem);
;// CONCATENATED MODULE: ./src/feature/goods/template/GoodsList.jsx





const GoodsList_Container = (external_styled_components_default()).div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoodsList = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(GoodsList_Container, {
    children: dummyData/* dummyGoodsList.map */.lL.map(item => /*#__PURE__*/jsx_runtime_.jsx(component_GoodsItem, {
      id: item.id,
      item: item
    }))
  });
};

/* harmony default export */ const template_GoodsList = (GoodsList);

/***/ })

};
;