"use client"
import { motion } from 'motion/react'
import TextType from './TextType'
import Image from 'next/image'
import { RefObject, useState } from 'react'
import { div } from 'motion/react-client'

interface stateProps{
  bgMusic:RefObject<HTMLAudioElement | null>
}


function Section1({bgMusic}:stateProps) {

  const [section1Txt, setSection1Txt] = useState(false)

  const [pause, setPause] = useState(true)

  const [play, setPlay] = useState(false)

  const pauseFunc =()=>{
    bgMusic.current?.pause()
    setPause(false)
    setPlay(true)
  }

  const playFunc = ()=>{
    bgMusic.current?.play()
    setPlay(false)
    setPause(true)

  }


  return (
   <>

   <motion.section className="section1">

     <Image src={"/gifs/butterFly.gif"} height={150} width={150} alt="love Design" unoptimized className="groupOfLove1" />

    {pause && <div onClick={pauseFunc}> <Image src={"/gifs/diskGif.gif"} height={100} width={100} alt="love Design" unoptimized className="musicPlayer1" /> </div>}

    {play && <div onClick={playFunc}> <Image src={"/gifs/diskGif.gif"} height={100} width={100} alt="love Design" unoptimized className="musicPlayer2" /> </div>}

    <Image src={"/gifs/musicTone.gif"} height={100} width={100} alt="love Design" unoptimized className="musicPlayer" />

    <div className="section1Div1">
        
  {section1Txt && <TextType 
      text={["Hey Baby!", "It's Val Already"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor
      cursorCharacter="💖"
      deletingSpeed={10}
      cursorBlinkDuration={0.5}
      className='section1Txt'

    />}
    <motion.div
    onViewportEnter={()=>{
      setSection1Txt(true)
     }}
  
     onViewportLeave={()=>{
      setSection1Txt(false)
     }}
    ></motion.div>
    </div>

    <div className="section1Div2">

        <motion.div className='section1Img' whileInView={{rotate:-10}}> <Image src={"/photos/section1Img1.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

        <motion.div  className='section1Img' whileInView={{rotate:10}}> <Image src={"/photos/section1Img2.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

    </div>


   </motion.section>

   </>
  )
}

export default Section1
