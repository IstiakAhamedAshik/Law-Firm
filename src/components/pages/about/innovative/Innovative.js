import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { AiOutlineRead } from 'react-icons/ai'
import { FaPenToSquare } from 'react-icons/fa6'
import { FaLeaf } from 'react-icons/fa'

import 'react-circular-progressbar/dist/styles.css'
import './innovative.css'
const Innovative = () => {
  let userValue = 50
  const value = userValue / 100
  let userValue1 = 70
  const value1 = userValue1 / 100
  let userValue2 = 60
  const value2 = userValue2 / 100
  return (
    <div className='flex flex-wrap md:flex-wrap lg:flex-nowrap justify-between'>
      <div className='innovative-background1 p-8'>
        <div className='flex flex-wrap justify-center'>
          <div className='mt-4'>
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={value}
                maxValue={1}
                text={`${value * 100}%`}
                styles={buildStyles({
                  textSize: '25px',
                  textWeight: '900',
                  pathColor: `black`,
                  textColor: 'black',
                  trailColor: 'white',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <p className='text-center mt-4 md:mt-3 lg:mt-3 font-medium'>
              LEGAL SOLUTIONS
            </p>
          </div>
          <div className='ml-8 mt-4'>
            {' '}
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={value1}
                maxValue={1}
                text={`${value1 * 100}%`}
                styles={buildStyles({
                  textSize: '25px',
                  textWeight: '900',
                  pathColor: `black`,
                  textColor: 'black',
                  trailColor: 'white',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <p className='text-center mt-4 md:mt-3 lg:mt-3 font-medium'>
              LEGAL SOLUTIONS
            </p>
          </div>
          <div className='ml-8 mt-4'>
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={value2}
                maxValue={1}
                text={`${value2 * 100}%`}
                styles={buildStyles({
                  textSize: '25px',
                  textWeight: '900',
                  pathColor: `black`,
                  textColor: 'black',
                  trailColor: 'white',
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
            <p className='text-center mt-4 md:mt-3 lg:mt-3 font-medium'>
              LEGAL SOLUTIONS
            </p>
          </div>
        </div>
        <h1 className='text-5xl font-medium text-center mt-10'>
          Skilled Lawyers at Help With a Clear Mission
        </h1>
      </div>
      <div className='innovative-background p-8'>
        <p className='font-semibold text-[18px] mb-4'>
          Culpa officia deserunt mollit animd laborum
        </p>
        <h1 className='text-5xl font-bold mb-8'>Innovative Approach</h1>
        <div className='flex md:items-center lg:items-center flex-col md:flex-row lg:flex-row'>
          <FaLeaf className='w-[50px] h-[70px] mr-3 icon-color' />
          <div>
            {' '}
            <h1 className='text-[22px] font-semibold'>
              Trusted advisors for successful people
            </h1>
            <p>
              Miventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo nemo enim consequuntur magni dolores eos.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:items-center lg:items-center md:flex-row lg:flex-row  mt-5'>
          <FaPenToSquare className='w-[50px] h-[70px] mr-3 icon-color' />
          <div>
            <h1 className='text-[22px] font-semibold'>
              Trusted advisors for successful people
            </h1>
            <p>
              Miventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo nemo enim consequuntur magni dolores eos.
            </p>
          </div>
        </div>
        <div className='flex md:items-center lg:items-center flex-col md:flex-row lg:flex-row mt-5'>
          <AiOutlineRead className='w-[50px] h-[70px] mr-3 icon-color' />
          <div>
            <h1 className='text-[22px] font-semibold'>
              Trusted advisors for successful people
            </h1>
            <p>
              Miventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo nemo enim consequuntur magni dolores eos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Innovative
