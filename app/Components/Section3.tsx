"use client"

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"
import TextType from './TextType'
import Image from "next/image"


function Section3() {

    const [sec3Bg, setSec3bg] = useState("pink")

    const section3Ref = useRef<null>(null)

    const {scrollYProgress:progressBg} = useScroll({
        target:section3Ref,
        offset:["start end" , "end start"]

    })

    useMotionValueEvent(progressBg, "change", (value)=>{
        if(value > 0.4){
            setSec3bg("white")
        }

        if(value < 0.4){
            setSec3bg("pink")
        }
    })

    ///////////////// Text OnOpen //////////////


    const [section3Txt, setSection3Txt] = useState(false)


    //////////// Horizontal Scroll /////////////////////

    const section3MainRef = useRef<null>(null)

    const {scrollYProgress:horzProgress} = useScroll({
        target:section3MainRef
    })

    const x = useTransform(horzProgress, [0,1], ["0", "-400vw"])
    


  return (
   <>
   
   <motion.section id="section3" ref={section3MainRef}>
 

   <motion.section className="section3Alpha" style={{backgroundColor:sec3Bg}} ref={section3Ref} >

   <Image src={"/gifs/dragonFly.gif"} height={100} width={100} alt="love Design" unoptimized className="dragonFly" />

   <Image src={"/gifs/musicColor.gif"} height={100} width={100} alt="love Design" unoptimized className="musicColor" />


    <motion.div className="section3Div1" style={{x:x}}>

    <motion.div className='section3Img' whileInView={{rotate:-10}}> <Image src={"/photos/sec3_1.jpeg"} height={200} width={250} alt='sectionPhotos' /> </motion.div>

    <motion.div className='section3Img' whileInView={{rotate:10}}> <Image src={"/photos/sec3_2.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

    <motion.div className='section3Img' whileInView={{rotate:-10}}> <Image src={"/photos/sec3_3.jpeg"} height={350} width={350} alt='sectionPhotos' /> </motion.div>

    <motion.div className='section3Img' whileInView={{rotate:10}}> <Image src={"/photos/sec3_4.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

    <motion.div className='section3Img' whileInView={{rotate:-10}}> <Image src={"/photos/sec3_5.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>





    </motion.div>


    <motion.div className="section3Div2">

    {section3Txt && <TextType 
             text={["There isn't a second that passes that I don't think of"," How Pretty you are ","Your Cute Smile" ,"How you care for everyone", "That blush on your checks when you're shy", "How you get excited when I don't even try"]}
             typingSpeed={75}
             pauseDuration={1500}
             showCursor
             cursorCharacter="💖"
             deletingSpeed={10}
             cursorBlinkDuration={0.5}
             className='section3Txt'
       
           />}

           <motion.div
            onViewportEnter={()=>{
            setSection3Txt(true)
           }}

           onViewportLeave={()=>{
            setSection3Txt(false)
           }}
           >
            </motion.div>      

    </motion.div>

   </motion.section>

   </motion.section>


   </>
  )
}

export default Section3
