'use client';
import { StylesConfig } from 'react-select';
import Select from 'react-select';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../../buttons/Button';
import { Checkbox } from '../../../form/Checkbox';
import { Paragraph } from '../../../typography/Paragraph';

import { Title } from '../../../typography/Title';
import BankIcons from '../../BankIcons/BankIcons';
import { Payments, SchemaTypes } from '@/components/Payment/Payments.props';
import Modal from '@/components/modal/Modal';
import ModalSupport from '../../Modal/ModalChildSupport';
import { paymentsForm } from '@/utils/schema/paymentFrom';

type FormData = yup.InferType<ReturnType<typeof paymentsForm>>;

const MonthlyAssistanceForm = ({
  className,
  payments,
  schema,
}: {
  className: string;
  payments: Payments;
  schema: SchemaTypes;
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  } | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { handleSubmit, reset, control, register } = useForm();
  const methods = useForm<FormData>({
    resolver: yupResolver(paymentsForm(schema)),
  });

  const watch = methods.watch;
  const checked = watch('checkbox');

  const options = [
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
    { value: 'USD', label: '$ USD', symbol: '$' },
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
      backgroundColor: state.isFocused ? '#FFF' : '#FFF',
      color: state.isFocused ? '#1A48ED' : '#43444A',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#FFF',
      },
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      justifyContent: state.hasValue ? 'flex-end' : 'flex-start',
      cursor: 'pointer',
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
    const amount = event.target.value;
    if (
      !isNaN(parseFloat(amount)) &&
      parseFloat(amount) >= 0 &&
      Number.isInteger(parseFloat(amount))
    ) {
      setDonationAmount(amount);
    } else {
      setDonationAmount('');
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className={className}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-4  xl:flex-row">
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select
                  styles={customStyles}
                  options={options.map(option => ({
                    ...option,
                    label: option.label,
                  }))}
                  onChange={handleCurrencyChange}
                  placeholder={payments.chooseYourContribution}
                  className="mb-[30px] w-full border border-b-2 border-none border-grey-60 xl:w-full"
                />
              )}
            />

            <div className="flex flex-wrap gap-3 gap-y-[30px] xl:gap-x-8 2xl:gap-x-14 3xl:gap-x-40">
              <Button
                variant="white"
                className="relative w-[150px] hover:border-none sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px]"
              >
                {`100 ${selectedCurrency ? selectedCurrency.symbol : ''}`}
                <span className="absolute inset-0 rounded-[48px] border-4 border-transparent hover:border-accent-primary"></span>
              </Button>
              <Button
                variant="white"
                className="relative w-[150px] hover:border-none sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px]"
              >
                {`200 ${selectedCurrency ? selectedCurrency.symbol : ''}`}
                <span className="absolute inset-0 rounded-[48px] border-4 border-transparent hover:border-accent-primary"></span>
              </Button>
              <Button
                variant="white"
                className="relative w-[150px] hover:border-none sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px]"
              >
                {`500 ${selectedCurrency ? selectedCurrency.symbol : ''}`}
                <span className="absolute inset-0 rounded-[48px] border-4 border-transparent hover:border-accent-primary"></span>
              </Button>

              <div className="relative 2xl:w-full">
                <input
                  {...register('otherAmount', {
                    required: false,
                    minLength: 0,
                  })}
                  type="number"
                  placeholder={payments.otherAmountText}
                  onChange={handleDonationAmountChange}
                  value={donationAmount}
                  className=" h-[54px] w-[150px] gap-4 rounded-[48px] border border-accent-primary bg-grey-20 text-center hover:border-4 hover:border-accent-hover sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[581px] 2xl:w-[626px]  3xl:w-[850px]"
                />
                {donationAmount && selectedCurrency && (
                  <span className="absolute h-[26px] w-3 pr-2 xs:bottom-[13px] xs:right-[26px] sm:bottom-[13px] sm:right-[66px] md:bottom-[13px] md:right-[126px] lg:bottom-3 lg:right-[184px] xl:bottom-[13px] xl:right-[242px] 2xl:bottom-3 2xl:right-[268px] 3xl:right-[382px]">
                    {selectedCurrency.symbol}
                  </span>
                )}
              </div>
            </div>
            <hr />
            <div className="w-full lg:block lg:w-full">
              <Checkbox
                name="checkbox"
                description={payments.supportPostAngeles}
                variantFontWeight="normal"
                className="mb-[30px]"
                onChange={handleCheckboxChange}
              />
              <div className="mb-[40px]">
                <input
                  type="number"
                  placeholder={isChecked && selectedCurrency ? selectedCurrency?.label : ''}
                  className="h-[54px] w-[320px] gap-4 rounded-[48px] border border-accent-primary bg-grey-20 text-center hover:border-4 hover:border-accent-hover sm:w-[440px] md:w-[728px]  lg:w-full xl:w-[581px] 2xl:w-[626px]  3xl:w-[850px]"
                  onChange={handleInputChange}
                  onClick={openModal}
                  value={inputValue}
                />
                {checked && modalVisible && (
                  <Modal
                    modal={{
                      button: {
                        label: '',
                      },
                    }}
                    modalClose={closeModal}
                  >
                    <ModalSupport />
                  </Modal>
                )}
              </div>

              <Paragraph variant="light" variantFontSize="14">
                {payments.contributionText}
              </Paragraph>

              <div className="mt-[30px] flex items-start">
                <Title variantSize="h5" className="items-center justify-center">
                  {payments.paymentSystemTitle}
                </Title>
              </div>

              <BankIcons />

              <Button type="submit" className="w-full p-[10px] " onSubmit={onSubmit}>
                {payments.supportUsButton}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MonthlyAssistanceForm;
