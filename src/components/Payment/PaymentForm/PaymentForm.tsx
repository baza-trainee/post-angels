'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';
import * as yup from 'yup';

import Modal from '@/components/modal/Modal';
import { Locale } from '@/i18n.config';
import { paymentsForm } from '@/utils/schema/paymentFrom';
import { useRouter } from 'next/navigation';
import { Button } from '../../buttons/Button';
import { Checkbox } from '../../form/Checkbox';
import { Paragraph } from '../../typography/Paragraph';
import { Title } from '../../typography/Title';
import BankIcons from '../BankIcons/BankIcons';
import ModalMonthlySupport from '../Modal/ModalMonthlySupport';
import { PaymentFormProps } from '../Payments.props';
import useBreakpoints from '@/utils/useBreakpoints';

type FormData = yup.InferType<ReturnType<typeof paymentsForm>>;

export const PaymentForm = ({
  className,
  schema,
  isDisabled,
  dictionary,
  lang,
  projectTitle,
  regularMode,
}: PaymentFormProps & { lang: Locale; projectTitle: string; regularMode: string }) => {
  const router = useRouter();

  const [selectedCurrency, setSelectedCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  } | null>(null);
  const [donationAmount, setDonationAmount] = useState<number>(200);
  const [oneTimeAmount, setOneTimeAmount] = useState<number>(0);
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { bigger1280px } = useBreakpoints();
  const { handleSubmit, reset, control, register } = useForm();

  const methods = useForm<FormData>({
    resolver: yupResolver(paymentsForm(schema)),
  });

  const watch = methods.watch;
  const checked = watch('checkbox');

  const dotaionOptions = [100, 200, 500];
  const options = [
    { value: 'UAH', label: '₴ UAH', symbol: '₴' },
    { value: 'USD', label: '$ USD', symbol: '$' },
  ];

  const handleInputChange = (event: any) => {
    setOneTimeAmount(event.target.value);
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
    } else {
      setSelectedCurrency(null);
    }
  };

  const handleDonationAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    if (parseInt(amount) >= 0) {
      setDonationAmount(parseInt(amount));
    } else {
      setDonationAmount(0);
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

  const onSubmit = async (data: any) => {
    const response = await fetch(`/${lang}/api/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: `id-${Date.now()}`,
        order_desc: projectTitle,
        amount: regularMode === 'once' ? donationAmount + oneTimeAmount ?? 0 : oneTimeAmount,
        currency: selectedCurrency?.value,
        regularMode: regularMode,
        regularAmount: regularMode === 'once' ? 0 : donationAmount,
      }),
    });
    const res = await response.json();
    if (res.status === 'Ok') {
      router.push(res.response);
    }
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
              {dotaionOptions.map(amount => (
                <label className="flex cursor-pointer items-center gap-x-2" key={amount}>
                  <input
                    type="checkbox"
                    checked={donationAmount === amount}
                    onChange={() => setDonationAmount(amount)}
                    className="hidden"
                  />
                  <div
                    className={`w-[150px] rounded-[32px] py-[14px] text-center text-accent-primary ring-1 ring-inset ring-accent-primary ring-offset-0 hover:ring-4 sm:w-[210px] md:w-[349px] lg:w-[465px] xl:w-[170px] 3xl:w-[200px] ${
                      donationAmount === amount ? 'ring-4' : ''
                    }`}
                  >
                    {`${amount} ${selectedCurrency ? selectedCurrency.symbol : ''}`}
                  </div>
                </label>
              ))}

              <div className="relative xl:w-full">
                <input
                  {...register('otherAmount', {
                    required: true,
                    minLength: 0,
                  })}
                  type="number"
                  placeholder={dictionary.payments.otherAmountText}
                  onChange={handleDonationAmountChange}
                  value={donationAmount}
                  disabled={isDisabled}
                  className=" h-[54px] w-[150px] gap-4 rounded-[48px] bg-grey-20 text-center ring-1 ring-inset ring-accent-primary ring-offset-0 duration-300 hover:ring-4 sm:w-[210px] md:w-[349px] lg:w-[465px]  xl:w-full"
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
                  className="h-[54px] w-[320px] gap-4 rounded-[48px] bg-grey-20 pb-[1px] pl-[84px] ring-1 ring-inset ring-accent-primary ring-offset-0 duration-300 hover:ring-4 sm:w-[440px] md:w-[728px] lg:w-full xl:w-full"
                  onChange={handleInputChange}
                  onClick={openModal}
                  value={oneTimeAmount}
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
                    scroll={bigger1280px ? false : true}
                    modalClose={closeModal}
                    className="h-full max-h-[700px] w-full rounded-2xl py-2  lg:w-[790px] xl:h-[860px] xl:max-h-[940px]"
                    iconClassName="fixed top-5 !right-[28px] md:!right-[28px]"
                    overlayClassName="!p-2"
                  >
                    <ModalMonthlySupport
                      dictionary={dictionary}
                      setModalVisible={setModalVisible}
                      InputValue={setOneTimeAmount}
                    />
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
                onClick={handleSubmit(onSubmit)}
                disabled={!(selectedCurrency && donationAmount && !isDisabled) ?? true}
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

export default PaymentForm;
