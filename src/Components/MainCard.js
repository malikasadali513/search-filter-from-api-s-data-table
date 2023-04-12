import React from 'react'
import Cards from './Cards'
import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Node from '../assests/node.png';
import FireBase from '../assests/firebase.png';
import AWS from '../assests/aws.png';
import GitHib from '../assests/github.png';



function MainCard(props) {
  return (
    <>
    <div name="skills" className='w-full h-screen bg-[#0a192f]  text-gray-300'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the Technologies I've worked with</p>
      </div>
      <div className='w-full gap-4 grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
          <div className='  shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={HTML}
          name='HTML'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={CSS}
          name='CSS'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={JavaScript}
          name='JavaScript'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={ReactImg}
          name='React'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={Node}
          name='Node'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={FireBase}
          name='FireBase'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={AWS}
          name='AWS'
          />
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <Cards 
          img={GitHib}
          name='GitHib'
          />
          </div>
          
      </div>
    </div>
  </div>
    <div>
    </div>
    </>
  )
}

export default MainCard
