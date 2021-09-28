"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dist_PaymentModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./node_modules/bitcoin_payment_module_modal/dist/feature/api/payment.api.js

const createPayment = async (userId, price) => {
  const {
    data
  } = await external_axios_default()({
    method: 'post',
    url: 'http://localhost:3000/api/payment/create',
    data: {
      userId,
      price
    }
  });
  return data.payment;
};
const getPaymentState = async (address, value) => {
  const {
    data
  } = await external_axios_default()({
    method: 'get',
    url: `http://2d1b-211-213-198-46.ngrok.io/api/validtx/${address}/${value}`
  });
  return data;
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./node_modules/bitcoin_payment_module_modal/dist/feature/stateComponent/AfterPaid.js


const Container = (external_styled_components_default()).div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    color: #000;
    font-size: 20;
    font-weight: bold;
`;

const AfterPaid = () => {
  return /*#__PURE__*/external_react_default().createElement(Container, null, /*#__PURE__*/external_react_default().createElement("span", null, "\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/external_react_default().createElement("span", null, "5\uCD08 \uB4A4 \uC6D0\uB798 \uCC3D\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4."));
};

/* harmony default export */ const stateComponent_AfterPaid = (AfterPaid);
// EXTERNAL MODULE: external "qrcode.react"
var external_qrcode_react_ = __webpack_require__(889);
var external_qrcode_react_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_react_);
;// CONCATENATED MODULE: ./node_modules/bitcoin_payment_module_modal/dist/feature/stateComponent/BeforePay.js



const BeforePay_Container = (external_styled_components_default()).div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const HeadLine = (external_styled_components_default()).span`
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: bold;
`;
const Title = (external_styled_components_default()).span`
    width: 100%;

    padding-left: 4px;
    margin-bottom: 12px;

    font-size: 16;
    font-weight: bold;
`;
const SubTitle = (external_styled_components_default()).span`
    width: 100%;

    padding-left: 20px;

    font-size: 16;
`;
const QRContainer = (external_styled_components_default()).div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const BeforePay = ({
  address,
  price
}) => {
  const data = JSON.stringify({
    address,
    price: price * 100000000
  });
  return /*#__PURE__*/external_react_default().createElement(BeforePay_Container, null, /*#__PURE__*/external_react_default().createElement(HeadLine, null, "\uACB0\uC81C\uB97C \uC9C4\uD589\uD574\uC8FC\uC138\uC694."), /*#__PURE__*/external_react_default().createElement(Title, null, "\uACB0\uC81C \uC815\uBCF4\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/external_react_default().createElement(SubTitle, null, " \uAC00\uACA9 : ", price, " BTC"), /*#__PURE__*/external_react_default().createElement(SubTitle, null, " \uC8FC\uC18C : ", address), /*#__PURE__*/external_react_default().createElement(QRContainer, null, /*#__PURE__*/external_react_default().createElement((external_qrcode_react_default()), {
    value: data
  })));
};

/* harmony default export */ const stateComponent_BeforePay = (BeforePay);
;// CONCATENATED MODULE: ./node_modules/bitcoin_payment_module_modal/dist/feature/stateComponent/Loading.js


const Loading_Container = (external_styled_components_default()).div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    color: #000;
    font-size: 20;
    font-weight: bold;
`;

const Loading = () => {
  return /*#__PURE__*/external_react_default().createElement(Loading_Container, null, "\uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4...");
};

/* harmony default export */ const stateComponent_Loading = (Loading);
;// CONCATENATED MODULE: ./node_modules/bitcoin_payment_module_modal/dist/PaymentModal.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const style = {
  overlay: {
    backgroundColor: '#000',
    opacity: 0.8
  },
  content: {
    width: 400,
    height: 400,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    borderRadius: 16
  }
};

function PaymentModal({
  visible,
  userId,
  price,
  onEnd,
  onClose
}) {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)('loading');
  const {
    0: payment,
    1: setPayment
  } = (0,external_react_.useState)({});

  function onRequestClose() {
    onClose();
  }

  async function getPayment() {
    const payment = await createPayment(userId, price);
    setState('beforePay');
    setPayment(payment);
  }

  async function getTransactionValidation(timerId) {
    const {
      valid,
      valtxid: txid
    } = await getPaymentState(payment.address, payment.price);

    if (state === 'beforePay' && valid) {
      setPayment(_objectSpread(_objectSpread({}, payment), {}, {
        txid
      }));
      setState('afterPaid');
      clearInterval(timerId);
      onEnd(txid, payment.address);
      onClose();
    }
  }

  (0,external_react_.useEffect)(() => {
    getPayment();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (state === 'beforePay' && payment.address) {
      const tId = setInterval(() => getTransactionValidation(tId), 5000);
    }
  }, [state, payment]);
  const stateComponent = {
    'loading': /*#__PURE__*/external_react_default().createElement(stateComponent_Loading, null),
    'beforePay': /*#__PURE__*/external_react_default().createElement(stateComponent_BeforePay, {
      price: price,
      address: payment.address
    }),
    'afterPaid': /*#__PURE__*/external_react_default().createElement(stateComponent_AfterPaid, null)
  };
  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    style: style,
    isOpen: visible,
    onRequestClose: onRequestClose
  }, stateComponent[state]);
}

/* harmony default export */ const dist_PaymentModal = (PaymentModal);

/***/ })

};
;