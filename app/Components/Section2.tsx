
"use client"
import { motion } from "motion/react"
import Image from "next/image"
import TextType from './TextType'
import { useState } from "react"


function Section2() {

    const [section2Txt, setSection2Txt] = useState(false)
    
  return (
    <>

    <section className="section2">

       <Image src={"/gifs/cherryTree.gif"} height={200} width={200} alt="love Design" unoptimized className="cherryTree" />

    

        <div className="section2Div2">

        <motion.div className="section2Img" animate={{rotate:-10}} ><Image src={"/photos/valHistory.png"} height={500} width={500} alt="Val Hstory" />
        </motion.div>

        </div>

        <div className="section2Div1">
            
            {section2Txt && <TextType 
             text={["TBH!", "I don't need a day to tell me to prove my love to you","But after seeing what legends have done on this day","I'm going to have to show them I can do lots better"]}
             typingSpeed={75}
             pauseDuration={1500}
             showCursor
             cursorCharacter="💖"
             deletingSpeed={10}
             cursorBlinkDuration={0.5}
             className='section2Txt'
       
           />}

           <motion.div
            onViewportEnter={()=>{
            setSection2Txt(true)
           }}

           onViewportLeave={()=>{
            setSection2Txt(false)
           }}
           >
            </motion.div>      

        </div>

    </section>

    </>
  )
}

export default Section2
