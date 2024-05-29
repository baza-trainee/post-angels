'use client';
import { StylesConfig } from 'react-select';
import Select from 'react-select';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';

import { Button } from '../../../buttons/Button';
import { Checkbox } from '../../../form/Checkbox';
import { Paragraph } from '../../../typography/Paragraph';
import { Title } from '../../../typography/Title';
import BankIcons from '../../BankIcons/BankIcons';
import Modal from '@/components/modal/Modal';
import { paymentsForm } from '../../../../utils/schema/paymentFrom';
import ModalOnceSupport from '../../Modal/ModalOnceSupport';
import { PaymentFormProps } from '../../Payments.props';

type FormData = yup.InferType<ReturnType<typeof paymentsForm>>;

const OneTimeAssistanceForm = ({
  className,
  schema,
  isDisabled,
  dictionary,
}: PaymentFormProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  } | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { handleSubmit, reset, control, register} = useForm();

  const methods = useForm<FormData>({
    resolver: yupResolver(paymentsForm(schema)),
  });

  const watch = methods.watch;
  const checked = watch('checkbox');

  const options = [
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
    { value: 'USD', label: '$ USD', symbol: '$' },
  ];

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
      const selectedCurrency = selectedOption as { value: string; label: string; symbol: string };
      setSelectedCurrency(selectedCurrency);
      if (inputValue) {
        setInputValue(`${inputValue} ${selectedCurrency.label}`);
      }
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

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={className}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
                  isDisabled={isDisabled}
                  onChange={handleCurrencyChange}
                  placeholder={dictionary.payments.chooseYourContribution}
                  className="mb-[30px] w-full border border-b-2 border-none border-grey-60 xl:w-full"
                />
              )}
            />

            <div className="flex w-full flex-wrap justify-between  gap-3 gap-y-[30px]">
              <Button
                variant="white"
                className="relative w-[150px] border-none ring-1 ring-inset ring-accent-primary ring-offset-0 hover:ring-4 sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px]"
              >
                {`100 ${selectedCurrency ? selectedCurrency.symbol : ''}`}
              </Button>
              <Button
                variant="white"
                className="relative w-[150px] border-none ring-1 ring-inset ring-accent-primary ring-offset-0 hover:ring-4 sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px]"
              >
                {`200 ${selectedCurrency ? selectedCurrency.symbol : ''}`}
              </Button>
              <Button
                variant="white"
                className="relative w-[150px] border-none ring-1 ring-inset ring-accent-primary ring-offset-0 hover:ring-4 sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px]"
              >
                {`500 ${selectedCurrency ? selectedCurrency.symbol : ''}`}
              </Button>

              <div className="relative xl:w-full">
                <input
                  {...register('otherAmount', {
                    required: false,
                    minLength: 0,
                  })}
                  type="number"
                  placeholder={dictionary.payments.otherAmountText}
                  onChange={handleDonationAmountChange}
                  value={donationAmount}
                  disabled={isDisabled}
                  className=" h-[54px] w-[150px] gap-4 rounded-[48px]  bg-grey-20 text-center  ring-1 ring-inset ring-accent-primary   ring-offset-0 duration-300  hover:ring-4 sm:w-[210px] md:w-[349px] lg:w-[465px]  xl:w-full "
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
                description={dictionary.payments.supportPostAngeles}
                variantFontWeight="normal"
                className="mb-[30px]"
                onChange={handleCheckboxChange}
              />
              <div className="relative mb-[40px]">
                <input
                  type="number"
                  placeholder={isChecked && selectedCurrency ? selectedCurrency.label : ''}
                  className="h-[54px] w-[320px] gap-4 rounded-[48px]  bg-grey-20 pb-[1px] pl-[84px] ring-1   ring-inset ring-accent-primary  ring-offset-0 duration-300  hover:ring-4  sm:w-[440px] md:w-[728px]  lg:w-full  xl:w-full"
                  onChange={handleInputChange}
                  onClick={openModal}
                  value={inputValue}
                  disabled={isDisabled}
                />
                {selectedCurrency && (
                  <span className="absolute inset-y-0 left-6 flex items-center pr-4">
                    {selectedCurrency.label}
                  </span>
                )}
                {checked && modalVisible && (
                  <Modal
                    modal={dictionary.modal}
                    scroll={true}
                    modalClose={closeModal}
                    className="sx:w-[360px] min-h-full px-1  py-10 lg:w-[790px] "
                    iconClassName=" fixed top-[110px] right-28"
                  >
                    <ModalOnceSupport dictionary={dictionary} InputValue={setInputValue} />
                  </Modal>
                )}
              </div>

              <Paragraph variant="light" variantFontSize="14">
                {dictionary.payments.contributionText}
              </Paragraph>

              <div className="mt-[30px] flex items-start">
                <Title variantSize="h5" className="items-center justify-center">
                  {dictionary.payments.paymentSystemTitle}
                </Title>
              </div>

              <BankIcons />

              <Button
                type="submit"
                className="w-full p-[10px] "
                onSubmit={handleSubmit(onSubmit)}
                disabled={isDisabled}
              >
                {dictionary.payments.supportUsButton}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default OneTimeAssistanceForm;
