import { Button } from '@/components/buttons/Button';
import { Locale } from '@/i18n.config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';

const ModalChildDonateForm = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const OneTimeTextButton = 'once';
  const MonthlyTextButton = 'monthly';

  const [activeButton, setActiveButton] = useState<string>('once');
  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  } | null>(null);
  const [donationAmount, setDonationAmount] = useState<number | null>(null);

  const { register } = useForm();

  const options = [
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
    { value: 'USD', label: '$ USD', symbol: '$' },
  ];
  const dotaionOptions = [100, 200, 500];

  const handleCurrencyChange = (selectedOption: unknown) => {
    if (
      selectedOption &&
      typeof selectedOption === 'object' &&
      'value' in selectedOption &&
      'label' in selectedOption
    ) {
      setSelectedCurrency(selectedOption as { value: string; label: string; symbol: string });
    } else {
      setSelectedCurrency(null);
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
        amount: 100,
        currency: 'USD',
      }),
    });
    const res = await response.json();
    if (res.status === 'Ok') {
      router.push(res.response);
    }
  };

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

  return (
    <form className="flex w-full flex-col gap-y-8">
      <div className="flex flex-col gap-y-7 text-center uppercase">
        <label className="flex cursor-pointer items-center gap-x-2">
          <input
            type="checkbox"
            checked={activeButton === 'once'}
            onChange={() => setActiveButton('once')}
            className="hidden"
          />
          <div
            className={`w-full rounded-2xl border-2 py-[14px] hover:border-accent-primary focus:border-accent-primary${
              activeButton === 'once' ? ' border-accent-primary' : ' border-grey-60'
            }`}
          >
            {OneTimeTextButton}
          </div>
        </label>
        <label className="flex cursor-pointer items-center gap-x-2">
          <input
            type="checkbox"
            checked={activeButton === 'monthly'}
            onChange={() => setActiveButton('monthly')}
            className="hidden"
          />
          <div
            className={`w-full rounded-2xl border-2 py-[14px] hover:border-accent-primary focus:border-accent-primary${
              activeButton === 'monthly' ? ' border-accent-primary' : ' border-grey-60'
            }`}
          >
            {MonthlyTextButton}
          </div>
        </label>
      </div>
      <Select
        styles={customStyles}
        options={options.map(option => ({
          ...option,
          label: option.label,
        }))}
        isDisabled={false}
        onChange={handleCurrencyChange}
        placeholder={'payments.chooseYourContribution'}
        className="w-full border border-b-2 border-none border-grey-60 xl:w-full"
      />
      <div className="flex w-full flex-col gap-y-[10px]">
        {dotaionOptions.map(amount => (
          <label className="flex cursor-pointer items-center gap-x-2" key={amount}>
            <input
              type="checkbox"
              checked={donationAmount === amount}
              onChange={() => setDonationAmount(amount)}
              className="hidden"
            />
            <div
              className={`w-full rounded-[32px] border py-[14px] text-center hover:border-accent-primary focus:border-accent-primary text-accent-primary${
                donationAmount === amount ? ' border-accent-primary' : ' border-grey-60'
              }`}
            >
              {`${amount} ${selectedCurrency ? selectedCurrency.symbol : ''}`}
            </div>
          </label>
        ))}
        <div className="relative xl:w-full">
          <input
            {...register('otherAmount', {
              required: false,
              minLength: 0,
            })}
            type="number"
            placeholder={'payments.otherAmountText'}
            onChange={handleDonationAmountChange}
            value={`${donationAmount}`}
            disabled={false}
            className=" h-[54px] w-full gap-4 rounded-[48px] bg-grey-20 text-center  ring-1 ring-inset ring-accent-primary ring-offset-0 duration-300  hover:ring-4"
          />
          {donationAmount && selectedCurrency && (
            <span className="absolute h-[26px] w-3 pr-2 xs:bottom-[13px] xs:right-[26px]">
              {selectedCurrency.symbol}
            </span>
          )}
        </div>
      </div>

      <Button onClick={handelClick}>Підтримати</Button>
    </form>
  );
};

export default ModalChildDonateForm;
