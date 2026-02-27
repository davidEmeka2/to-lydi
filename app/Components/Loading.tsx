"use Client"


import { motion } from "motion/react"

import Image from "next/image"
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react"


interface stateProps{
  setSectionsOpen:Dispatch<SetStateAction<boolean>>,
  bgMusic:RefObject<HTMLAudioElement | null>
}



function Loading({setSectionsOpen, bgMusic}:stateProps) {

   

    const [scaleHeart,setScaleHeart] = useState(0)

    

   
    

    


    const scaleFunc = ()=>{
      setScaleHeart(5)

      bgMusic.current?.loop


      const loadingTimeout = setTimeout(() => {
        setSectionsOpen(false)

        bgMusic.current?.play()

        bgMusic.current?.loop

      
       

      }, 1000);

      return ()=> clearTimeout(loadingTimeout)
    }

    //////////////////// Music Player /////////////////////

  
    



    

  return (
   <>

   <section id="loading">


   <section className="loading">

    <Image src={"/gifs/groupOfLove.gif"} height={150} width={150} alt="love Design" unoptimized className="groupOfLove1" />

    <Image src={"/gifs/groupOfLove2.gif"} height={200} width={200} alt="love Design" unoptimized className="groupOfLove2" />


    


    <div className="loadingBarAlpha">

       

        <motion.div className="loadingProgress"
        initial={{x:"-100%"}}

        animate={{x:"0", transition:{duration:3}}}
    
        ></motion.div>

    </div>

   </section>


   {/* //////////////////// Letter Sec ///////////////////// */}


   <motion.section className="loadingLetter"
   
   animate={{y:"-100%", transition:{delay:3.2, duration:0.5, ease:"easeInOut"}}}
   >

    <Image src={"/gifs/cherryTree.gif"} height={250} width={250} alt="love Design" unoptimized className="birdFlying" />

    <Image src={"/gifs/singleFlower.gif"} height={200} width={200} alt="love Design" unoptimized className="SingleFlower" />

    <div onClick={scaleFunc}> <Image src={"/letter.png"} height={700} width={700} alt="letter Image"  /> </div>

    <motion.div className="heartAlpha" initial={{scale:0}} animate={{scale:scaleHeart, transition:{duration:2}}} ><Image src={"/svgs/heart.svg"} height={3000} width={3000} alt="letter Image" className="heartSvg" /></motion.div>


   </motion.section>

   
</section>

   </>
  )
}

export default Loading
