import { Locale } from '@/i18n.config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { Button } from '../buttons/Button';
import { Title } from '../typography/Title';

interface OrderBody {
  [key: string]: string | number | string[] | number[];
}

const ModalDonate = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const [activeButton, setActiveButton] = useState<string>('once');
  console.log(activeButton);

  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  }>({ value: 'USD', label: '$ USD', symbol: '$' });
  const [donationAmount, setDonationAmount] = useState<number>(200);

  const subscriptionOptions = ['once', 'monthly'];
  const dotaionOptions = [100, 200, 500];
  const currencyOptions = [
    { value: 'USD', label: '$ USD', symbol: '$' },
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
  ];

  const handleDonationAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    if (
      !isNaN(parseFloat(amount)) &&
      parseFloat(amount) >= 0 &&
      Number.isInteger(parseFloat(amount))
    ) {
      setDonationAmount(parseFloat(amount));
    } else {
      setDonationAmount(0);
    }
  };

  const handleCurrencyChange = (selectedOption: unknown) => {
    if (
      selectedOption &&
      typeof selectedOption === 'object' &&
      'value' in selectedOption &&
      'label' in selectedOption
    ) {
      setSelectedCurrency(selectedOption as { value: string; label: string; symbol: string });
    } else {
      setSelectedCurrency({ value: 'USD', label: '$ USD', symbol: '$' });
    }
  };

  const customStyles: StylesConfig = {
    control: base => ({
      ...base,
      border: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #B1B0B0',
      borderRadius: '1px',
      paddingRight: '6px',
      paddingLeft: '6px',
      paddingTop: '8px',
      paddingBottom: '8px',
      fontSize: '14px',
      fontWeight: '400',
      outline: 'none',
      // backgroundColor: 'transparent',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
    menu: provided => ({
      ...provided,
      display: 'flex',
      gap: '4px',
      marginTop: '19px',
      borderRadius: '16px',
      background: '#FFF',
      padding: '4px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }),
    option: (provided, state) => ({
      ...provided,
      margin: '0',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '160%',
      backgroundColor: state.isFocused ? '#FFF' : '#FFF',
      color: state.isFocused ? '#1A48ED' : '#43444A',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#FFF',
      },
    }),
  };

  const handelClick = async () => {
    const response = await fetch(`/${lang}/api/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: `id-${Date.now()}`,
        order_desc: 'Благодійний внесок',
        amount: donationAmount,
        currency: selectedCurrency?.value,
        regularMode: activeButton,
      }),
    });
    const res = await response.json();
    if (res.status === 'Ok') {
      router.push(res.response);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-y-[10px] lg:px-10">
        <Title
          variantSize="h2"
          tag="h2"
          colorVariant="accent"
          className="flex flex-col text-center"
        >
          <span>Підтримати</span>
          <span className="!text-orange">Post Angeles</span>
        </Title>
        <div className="mt-7 flex w-full flex-col gap-y-8">
          <div className="flex flex-col justify-between gap-y-3 text-center uppercase lg:flex-row lg:gap-x-10">
            {subscriptionOptions.map(option => (
              <label className="flex flex-1 cursor-pointer items-center gap-x-2" key={option}>
                <input
                  type="checkbox"
                  checked={activeButton === option}
                  onChange={() => setActiveButton(option)}
                  className="hidden"
                />
                <div
                  className={`w-full rounded-2xl border-2 py-[14px] hover:border-accent-primary focus:border-accent-primary${
                    activeButton === option ? ' border-accent-primary' : ' border-grey-60'
                  }`}
                >
                  {option}
                </div>
              </label>
            ))}
          </div>
          <Select
            styles={customStyles}
            options={currencyOptions.map(option => ({
              ...option,
              label: option.label,
            }))}
            isDisabled={false}
            onChange={handleCurrencyChange}
            placeholder={'payments.chooseYourContribution'}
            inputValue={selectedCurrency?.label}
          />
          <div className="flex w-full flex-col gap-x-3 gap-y-[10px] md:flex-row md:flex-wrap md:justify-center">
            {dotaionOptions.map(amount => (
              <label className="flex cursor-pointer items-center gap-x-2" key={amount}>
                <input
                  type="checkbox"
                  checked={donationAmount === amount}
                  onChange={() => setDonationAmount(amount)}
                  className="hidden"
                />
                <div
                  className={`w-full rounded-[32px] border py-[14px] text-center hover:border-accent-primary focus:border-accent-primary md:w-[200px] text-accent-primary${
                    donationAmount === amount ? ' border-accent-primary' : ' border-grey-60'
                  }`}
                >
                  {`${amount} ${selectedCurrency ? selectedCurrency.symbol : ''}`}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-x-3 gap-y-[10px] md:flex-row md:justify-center">
          <div className="relative">
            <input
              type="number"
              placeholder={'payments.otherAmountText'}
              onChange={handleDonationAmountChange}
              value={`${donationAmount}`}
              disabled={false}
              className=" h-[54px] w-full gap-4 rounded-[48px] text-center outline-none ring-1 ring-inset ring-grey-60 focus:ring-accent-primary"
            />
            {donationAmount && selectedCurrency && (
              <span className="absolute right-4 top-3.5 h-[26px] w-3 pr-2">
                {selectedCurrency.symbol}
              </span>
            )}
          </div>
          <Button className="w-full md:w-[220px]" onClick={handelClick}>
            Підтримати
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModalDonate;
