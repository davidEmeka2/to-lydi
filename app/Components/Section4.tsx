"use client"
import { motion } from 'motion/react'
import TextType from './TextType'
import Image from 'next/image'
import { useState } from 'react'

function Section4() {

    const [section4Txt, setSection4Txt] = useState(false)

  return (
    <>

    <motion.section className="section4">

    <Image src={"/gifs/butterFly.gif"} height={100} width={100} alt="love Design" unoptimized className="butterfly" />

    <Image src={"/gifs/singleFlower.gif"} height={150} width={150} alt="love Design" unoptimized className="singleFlower" />

    <div className="section1Div1">
        
        {section4Txt && <TextType 
            text={["Whenever I remember that you're 3800km away from me", "I feel great despair","It's even more sad cuz there's nothing I can do about it", "But Something Helps me Stay strong each day"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="💖"
            deletingSpeed={10}
            cursorBlinkDuration={0.5}
            className='section4Txt'
      
          />}
          <motion.div
          onViewportEnter={()=>{
            setSection4Txt(true)
           }}
        
           onViewportLeave={()=>{
            setSection4Txt(false)
           }}
          ></motion.div>
          </div>
      
          <div className="section1Div2">
      
             <Image src={"/gifs/sadEye.gif"} height={500} width={500} alt='sectionPhotos' unoptimized /> 
      
             
      
          </div>
      

    </motion.section>

    </>
  )
}

export default Section4
