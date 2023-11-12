import React, { useEffect } from 'react'
import './question.css'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFaqData } from '../../../../feature/dataSlice'
function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}

const QuestionAns = () => {
  const [open, setOpen] = React.useState(null)

  const { faqData } = useSelector((state) => state.storeData)
  console.log(faqData)
  const handleOpen = (value) => setOpen(open === value ? null : value)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFaqData())
  }, [dispatch])

  return (
    <div className='mt-20'>
      <h1 className='text-3xl text-center font-bold md:font-bold lg:font-bold text-navyblue uppercase'>
        FAQ'S
      </h1>
      {faqData && faqData?.data && (
        <div className='px-4 md:px-20 mt-10'>
          {faqData?.data?.map((faq, index) => (
            <>
              <Accordion
                key={index}
                open={open === index}
                icon={<Icon id={index} open={open} />}
                className='mb-2 rounded-lg border border-blue-gray-100 px-4'
              >
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className={`border-b-0 transition-colors ${
                    open === index ? 'text-blue-500 hover:!text-blue-700' : ''
                  }`}
                >
                  {faq.question}
                </AccordionHeader>
                <AccordionBody className='pt-0 text-base font-normal'>
                  <p className='single-Question-Hover p-2 text-[18px]'>
                    {faq.answer}
                  </p>
                </AccordionBody>
              </Accordion>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default QuestionAns
