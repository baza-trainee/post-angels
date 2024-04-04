'use client'
import dynamic from "next/dynamic";
import { ReactNode, useState } from "react";
import { Payments } from '../Payments.props'
import useBreakpoints from "@/utils/useBreakpoints";

const PageContent = ({payments} : {payments:Payments}) => {
    const {OneTimeTextButton, MonthlyTextButton} = payments

    const [component, setComponent] = useState<ReactNode>(null);

    const OneTimeComponent = dynamic(() => import("../PaymentForm/OneTimeAssistanceForm/OneTimeAssistanceForm"));
    const MonthlyComponent = dynamic(() => import("../PaymentForm/MonthlyAssistanceForm/MonthlyAssistanceForm"));

    const { less1280px, bigger1280px, less1920px, bigger1920px } = useBreakpoints();

    const handleClick = (componentName:string) => {
        if (less1280px) {
            if (componentName === "OneTime") {
                setComponent(<OneTimeComponent className={"xl:flex xl:w-1/2 2xl:mr-[73px] 3xl:mr-[93px]"} payments={payments} />);
            } else if (componentName === "Monthly") {
                setComponent(<MonthlyComponent className={"flex xl:w-1/2"} payments={payments} />);
            }
        }
    }

    return (
        <div className="relative border-y border-grey-60 py-[30px] xl:before:absolute xl:before:left-[calc(50%_-_1px)] xl:before:top-0 xl:before:block xl:before:h-full xl:before:w-[1px] xl:before:bg-grey-60">
        <div className=" flex flex-col gap-y-4 xl:flex-row xl:justify-center">
            <button onClick={() => handleClick("OneTime")} className="active:xl:border-b-accent-hover w-full  rounded-2xl border border-grey-60 py-3 hover:border-accent-hover  xl:rounded-none xl:border-none xl:text-accent-pressed">
                {OneTimeTextButton}
            </button>
            <button onClick={() => handleClick("Monthly")} className="mb-[30px] w-full rounded-2xl border border-grey-60 py-3 hover:border-accent-hover hover:text-accent-primary xl:rounded-none xl:border-none xl:text-accent-pressed active:xl:border-b-accent-hover">
                {MonthlyTextButton}
            </button>
            {less1280px && component}
        </div>
            
            {bigger1280px && less1920px &&(
                <div className="flex flex-col xl:flex-row xl:gap-x-8">
                    <OneTimeComponent className="xl:flex xl:w-1/2 2xl:mr-[73px] 3xl:mr-[93px]" payments={payments} />
                    <MonthlyComponent className="flex xl:w-1/2" payments={payments} />
                </div>
            )}

             {bigger1920px &&(
                <div className="flex flex-col xl:flex-row xl:gap-x-8">
                    <OneTimeComponent className="xl:flex xl:w-1/2 2xl:mr-[73px] 3xl:mr-[93px]" payments={payments} />
                    <MonthlyComponent className="flex xl:w-1/2" payments={payments} />
                </div>
            )}
        </div>
        )
    }
    
    export default PageContent
