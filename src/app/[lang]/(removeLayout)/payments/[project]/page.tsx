'use client';

const Payments = ({ params }: { params: { project: string } }) => {
  return (
    <>
      <div> {params.project}</div>
      <form
        method="post"
        action="https://secure.wayforpay.com/pay"
        acceptCharset="utf-8"
        className="flex flex-col gap-4"
      >
        <input name="merchantAccount" defaultValue="test_merch_n1" />
        <input name="merchantAuthType" defaultValue="SimpleSignature" />
        <input name="merchantDomainName" defaultValue="www.market.ua" />
        <input name="orderReference" defaultValue="DH1714397318" />
        <input name="orderDate" defaultValue="1415379863" />
        <input name="amount" defaultValue="1547.36" />
        <input name="currency" defaultValue="UAH" />
        <input name="orderTimeout" defaultValue="49000" />
        <input name="productName[]" defaultValue="Процессор Intel Core i5-4670 3.4GHz" />
        <input name="productName[]" defaultValue="Память Kingston DDR3-1600 4096MB PC3-12800" />
        <input name="productPrice[]" defaultValue="1000" />
        <input name="productPrice[]" defaultValue="547.36" />
        <input name="productCount[]" defaultValue="1" />
        <input name="productCount[]" defaultValue="1" />
        <input name="clientFirstName" defaultValue="Вася" />
        <input name="clientLastName" defaultValue="Пупкин" />
        <input name="clientAddress" defaultValue="пр. Гагарина, 12" />
        <input name="clientCity" defaultValue="Днепропетровск" />
        <input name="clientEmail" defaultValue="some@mail.com" />
        <input name="defaultPaymentSystem" defaultValue="card" />
        <input name="merchantSignature" defaultValue="9aa2aa546974dc6a71b7b6d3c084d6e2" />
        <button className="border p-4">SUBMIT</button>
      </form>
    </>
  );
};

export default Payments;
