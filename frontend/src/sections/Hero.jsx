import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)


  return (
    <section 
      id='home'
      className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container  
      '>
        <div className=' relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
        <p className='text-xl text-coral-red leading-7 font-montserrat'>Our Summer Collection</p> 
        <h1 className='font-palanquin text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'> The New Arrival</span>
          <br/>
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>   
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className='border-2 w-full  flex justify-start items-start flex-wrap mt-20 gap-16 mb-10'>
          {statistics.map((stat)=>(
            <div key={stat.label} >
              <p className='text-4xl font-palanquin font-bold'>{stat.value} </p>
              <p className='text-slate-gray font-montserrat leading-7'>{stat.label}</p>
              </div>

          ))}

        </div>
        </div>
        <div className='relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'> 
          <img 
           src={bigShoeImg} 
           alt='shoe collection' 
           width={610} height={500} 
           className='object-contain relative z-10'>
           </img>
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe} 
                  changeBigShoeImage={(shoe)=>{
                    setBigShoeImg(shoe)
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>

            ))}
          </div>
        </div>

    </section>
  )
}

export default Hero