'use client';
import { StylesConfig } from 'react-select';
import Select from 'react-select';
import ValueType from 'react-select/base';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';

import { Button } from '../../buttons/Button';
// import '../../app/[lang]/globals.css';
import { Checkbox } from '../../form/Checkbox';
import { Input } from '../../form/Input';
import { Paragraph } from '../../typography/Paragraph';
import { Title } from '../../typography/Title';
import BankIcons from '../BankIcons/BankIcons';
import {Payments} from '@/components/Payment/Payments.props'

const OneTimeAssistanceForm = ({ className,payments}: { className: string, payments: Payments }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  } | null>(null);
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const { handleSubmit, control } = useForm();
  const methods = useForm();

  const options = [
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
    { value: 'USD', label: '$ Доллар США', symbol: '$' },
  ];

  const customStyles: StylesConfig = {
    control: (base) => ({
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

      outline: '#0D36C9',
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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

 

  return (
    <div className={`${className}`}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-4  xl:flex-row">
            <Controller
              name="currency"
              control={control}
              defaultValue={options.find(option => option.label === 'UAH')}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  options={options.map(option => ({
                    ...option,
                    label: `${option.label}`,
                  }))}
                  onChange={handleCurrencyChange}
                  placeholder={payments.chooseYourContribution}
                  className="mb-[30px] border border-b-2 border-none border-grey-60 w-full xl:w-full"
                />
              )}
            />
  
  <div className="flex flex-wrap gap-3 2xl:gap-3 2xl:gap-x-14 3xl:gap-x-40 2xl:gap-y-[30px] 3xl:gap-y-[30px] xl:gap-y-[30px] lg:gap-y-[30px] xl:gap-x-8 lg:gap-3 md:gap-8 ">
            <Button
              variant="white"
              className="w-[150px] sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] "
            >{`100 ${selectedCurrency ? selectedCurrency.symbol : ''}`}</Button>
            <Button
              variant="white"
              className="w-[150px] sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px]"
            >{`200 ${selectedCurrency ? selectedCurrency.symbol : ''}`}</Button>
            <Button
              variant="white"
              className="w-[150px] sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px]"
            >{`500 ${selectedCurrency ? selectedCurrency.symbol : ''}`}</Button>
          


            <div className="2xl:w-full">
              <input
                type="number"
                placeholder={payments.otherAmount}
                onChange={handleDonationAmountChange}
                value={donationAmount || ''}
                className=" h-[54px] w-[150px] gap-4 rounded-[48px] border border-accent-primary bg-grey-20 text-center sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[581px] 2xl:w-[626px] 3xl:w-[850px]"
              />
              {donationAmount && selectedCurrency && <span className="absolute xl:right-[861px] xl:bottom-[455px] 2xl:right-[1000px] pr-2 w-3 h-[26px] 2xl:bottom-[455px] 3xl:right-[1366px]">{selectedCurrency.symbol}</span>}
            </div>
            </div>
              <hr />
              <div className="lg:block lg:w-full w-full">
                <div className="">
                  <Checkbox
                    name="checkbox"
                    description={payments.supportPostAngeles}
                    variantFontWeight="normal"
                    className="xl:mb-[30px]"
                    onChange={handleCheckboxChange}
                  />
                </div>
  
                <div className="mb-[30px]">
                <input
                  type="number"
                  placeholder={isChecked && selectedCurrency ? selectedCurrency.label : ''}
                  className="mb-[10px] h-[54px] w-[150px] lg:w-full gap-4 rounded-[48px] border border-accent-primary bg-grey-20 text-center sm:w-[440px] md:w-[728px]  xl:w-[581px] 2xl:w-[626px] 3xl:w-[850px]"
                  name={''}
                  title={''}
                  onChange={handleInputChange}
                  value={inputValue}
                />
                  <Paragraph variant="light" variantFontSize="14">
                    {payments.contributionText}
                  </Paragraph>
                </div>
  
                <div className="flex items-start">
                  <Title variantSize="h5" className="items-center justify-center">
                    {payments.paymentSystemTitle}
                  </Title>
                </div>
  
                <div className='md:w-full'>
                <BankIcons />
  
                </div>
                <div>
                  <Button type="submit" className="w-full p-[10px] " onSubmit={onSubmit}>
                    {payments.supportUsButton}
                  </Button>
                </div>
              </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
  };

export default OneTimeAssistanceForm;
