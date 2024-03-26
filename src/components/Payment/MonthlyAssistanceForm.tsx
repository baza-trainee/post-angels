'use client';
import { StylesConfig } from 'react-select';
import Select from 'react-select';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useState } from 'react';

import { Button } from '../buttons/Button';
import '../../app/[lang]/globals.css';
import { Checkbox } from '../form/Checkbox';
import { Input } from '../form/Input';
import { Paragraph } from '../typography/Paragraph';
import { ICONS } from '@/components/icons';
import { Title } from '../typography/Title';
import { Locale } from '@/i18n.config';

const MonthlyAssistanceForm = ({ className }: { className: string }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  } | null>(null);
  const [donationAmount, setDonationAmount] = useState<number | null>(null);

  const [isChecked, setIsChecked] = useState(false);

  const { handleSubmit, control } = useForm();
  const methods = useForm();

  const options = [
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
    { value: 'USD', label: '$ Доллар США', symbol: '$' },
  ];

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
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      outline: 'none',
      backgroundColor: 'transparent',
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

      border: 'none',
      borderRadius: '16px',
      background: '#FFF',
      padding: '4px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }),
    option: (provided, state) => ({
      ...provided,
      margin: '0',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      color: state.isFocused ? '#1A48ED' : '#43444A',
      backgroundColor: state.isFocused ? '#FFF' : '#FFF',
      '&:active': {
        backgroundColor: '#FFF',
      },
    }),
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
      setSelectedCurrency(null);
    }
  };

  const handleDonationAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value);
    if (!isNaN(amount)) {
      setDonationAmount(amount);
    } else {
      setDonationAmount(null);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const beforeClass = `before:block before:w-[1px] before:h-[10%] before:bg-grey-60 before:absolute before:top-[940px] before:left-[50%] sm:before:block sm:before:w-[1px] sm:before:h-[10%] sm:before:bg-grey-60 sm:before:absolute sm:before:top-[888px] sm:before:left-[52%] ||||| md:before:block md:before:w-[1px] md:before:h-[10%] md:before:bg-grey-60 md:before:absolute md:before:top-[776px] md:before:left-[52%]`;
  const afterClass = `after:block after:w-[90%] xl:after:w-[1px] after:h-[1px] xl:after:h-full after:bg-grey-60 after:absolute after:left-[14px] after:top-[97%] xl:after:top-0 | sm:after:block sm:after:w-[90%] sm:after:h-[1px] sm:after:bg-grey-60 sm:after:absolute sm:after:left-[14px] sm:after:top-[92%] md:after:top-[81%] md:after:left-[38px]`;

  return (
    <div className={`${className}`}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-4 border-b border-grey-60 xl:flex-row">
            <Controller
              name="currency"
              control={control}
              defaultValue={options.find(option => option.value === 'UAH')}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  {...field}
                  options={options.map(option => ({
                    ...option,
                    label: `${option.label}`,
                  }))}
                  onChange={handleCurrencyChange}
                  placeholder="Оберіть свій внесок"
                  className="mb-[30px] w-full border border-b-2 border-none border-grey-60 xl:w-full"
                />
              )}
            />

            <div className="flex flex-wrap gap-5 xl:gap-5 3xl:gap-x-[74px]">
              <Button
                variant="white"
                className="w-[150px] sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px]"
              >{`100 ${selectedCurrency ? selectedCurrency.symbol : ''}`}</Button>
              <Button
                variant="white"
                className="w-[150px] sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px]"
              >{`200 ${selectedCurrency ? selectedCurrency.symbol : ''}`}</Button>
              <Button
                variant="white"
                className="w-[150px] sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px]"
              >{`500 ${selectedCurrency ? selectedCurrency.symbol : ''}`}</Button>

              <div className="">
                <input
                  type="number"
                  placeholder="Інша сума"
                  onChange={handleDonationAmountChange}
                  value={donationAmount || ''}
                  className=" 3xl: h-[54px] w-[150px] gap-4 rounded-[48px] border border-accent-primary bg-grey-20 text-center sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[581px]"
                />
              </div>
              <hr />
              <div className="md:w-full lg:block lg:w-full">
                <div className="">
                  <Checkbox
                    name="checkbox"
                    description="Підтримати Post Angeles (за бажанням)"
                    variantFontWeight="normal"
                    className="xl:mb-[30px]"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="mb-[30px] md:w-full">
                  <Input
                    type="number"
                    name=""
                    title={isChecked && selectedCurrency ? selectedCurrency.label : ''}
                    placeholder={isChecked && selectedCurrency ? selectedCurrency.label : ''}
                    className="mb-[10px] md:w-full"
                  />
                  <Paragraph variant="light" variantFontSize="14">
                    Це ваш внесок в існування нашої благодійної платформи.
                  </Paragraph>
                </div>

                <div className="flex items-start">
                  <Title variantSize="h5" className="items-center justify-center">
                    Оплатити за допомогою платіжної системи
                  </Title>
                </div>

                <div>
                  <ul
                    className={`mb-[50px] mt-[30px] flex flex-wrap justify-between xl:flex-nowrap ${beforeClass} ${afterClass}`}
                  >
                    <li className="flex w-[148px] items-center justify-center pb-[30px] pr-[9px] sm:w-2/4 ">
                      <ICONS.PRIVAT_BANK className="h-[22px]   w-[147px] cursor-pointer hover:text-accent-primary focus:text-accent-primary" />
                    </li>
                    <li className="flex h-[22px] w-[148px] items-center justify-center sm:w-2/4">
                      <ICONS.VISA className="h-[22px]   w-12 cursor-pointer hover:text-accent-primary focus:text-accent-primary" />
                    </li>
                    <li className="flex h-[22px] w-[150px] items-center justify-center pr-[10px] sm:w-2/4">
                      <ICONS.MASTER_CARD className="h-[22px]   w-[79px] cursor-pointer hover:text-accent-primary focus:text-accent-primary" />
                    </li>
                    <li className="flex h-[22px] w-[150px] items-center justify-center sm:w-2/4">
                      <ICONS.LIQPAY className="h-[21px]   w-[62px] cursor-pointer hover:text-accent-primary focus:text-accent-primary" />
                    </li>
                  </ul>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full p-[10px] xl:mb-[50px] "
                    onSubmit={onSubmit}
                  >
                    Підтримати
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MonthlyAssistanceForm;
