"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { RefObject, useState } from "react"
import TextType from './TextType'

interface stateProps{
    bgMusic:RefObject<HTMLAudioElement | null>
  }


function Section6({bgMusic}:stateProps) {

    const [section6Txt, setSection6Txt] = useState(false)

    
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
   <section className="section6">

   {pause && <div onClick={pauseFunc}> <Image src={"/gifs/diskGif.gif"} height={100} width={100} alt="love Design" unoptimized className="musicPlayer1" /> </div>}

{play && <div onClick={playFunc}> <Image src={"/gifs/diskGif.gif"} height={100} width={100} alt="love Design" unoptimized className="musicPlayer2" /> </div>}

<Image src={"/gifs/musicTone.gif"} height={100} width={100} alt="love Design" unoptimized className="musicPlayer" />

    <motion.section className="section6Scroller"
    animate={{y:"-84%",transition:{duration:30,delay:2 ,ease:"linear"}}}
    >

        <section className="sec6_1">

        <Image src={"/gifs/butterFly.gif"} height={150} width={150} alt="love Design" unoptimized className="groupOfLove1" />
        <Image src={"/gifs/groupOfLove2.gif"} height={200} width={200} alt="love Design" unoptimized className="groupOfLove2" />

       


            <h1 className="sec6_1Txt">Our Memories Together💖</h1>

        </section>


         <section className="sec6_2">

             <Image src={"/gifs/dragonFly.gif"} height={100} width={100} alt="love Design" unoptimized className="dragonFly" />

            <Image src={"/gifs/musicColor.gif"} height={100} width={100} alt="love Design" unoptimized className="musicColor" />

            <div className="sec6Div1">
                 <motion.div className='section1Img' whileInView={{rotate:-10}}> <Image src={"/photos/sec6Hand1.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

                 <motion.div  className='section1Img' whileInView={{rotate:10}}> <Image src={"/photos/sec6Hand2.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>
            </div>


            <div className="sec6Div2">

                <p className="sec6_Txt">When you first took my hand 💗</p>

            </div>

        </section>




         <section className="sec6_2" aria-label="sec6_3">

             <Image src={"/gifs/butterFly.gif"} height={100} width={100} alt="love Design" unoptimized className="butterfly" />

             


            <div className="sec6Div1">
                 <motion.div className='section1Img' whileInView={{rotate:-10}}> <Image src={"/photos/proposed1.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

                 <motion.div  className='section1Img' whileInView={{rotate:10}}> <Image src={"/photos/proposed2.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>
            </div>


            <div className="sec6Div2">

                <p className="sec6_Txt">That smile on you when I proposed 🥺</p>

            </div>


        </section>




         <section className="sec6_2" aria-label="sec6_4">

            <div className="sec6Div1">
                 <motion.div className='section1Img' whileInView={{rotate:-10}}> <Image src={"/photos/drunkTgd1.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

                 <motion.div  className='section1Img' whileInView={{rotate:10}}> <Image src={"/photos/drunkTgd.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>
            </div>


            <div className="sec6Div2">

                <p className="sec6_Txt">First time we drank Together 😜</p>

            </div>


        </section>


         <section className="sec6_2" aria-label="sec6_5">

         <Image src={"/gifs/singleFlower.gif"} height={150} width={150} alt="love Design" unoptimized className="butterfly" />

         <Image src={"/gifs/groupOfLove.gif"} height={150} width={150} alt="love Design" unoptimized className="groupOfLove1" />

    


            <div className="sec6Div1">
                 <motion.div className='section1Img' whileInView={{rotate:-10}}> <Image src={"/photos/firstTour1.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>

                 <motion.div  className='section1Img' whileInView={{rotate:10}}> <Image src={"/photos/firstTour2.jpeg"} height={250} width={250} alt='sectionPhotos' /> </motion.div>
            </div>


            <div className="sec6Div2">

                <p className="sec6_Txt">Even those casual walks 🙂</p>

            </div>


        </section>


         <section className="sec6_1">

         <Image src={"/gifs/whiteFlower.gif"} height={150} width={150} alt="love Design" unoptimized className="whiteFlower" />
         <Image src={"/gifs/cherryTree.gif"} height={200} width={200} alt="love Design" unoptimized className="cherryTree" />

                 {section6Txt && <TextType 
                    text={["I hold onto these lovely moments 🥰" ,"Baby . . .", "Please continue to be mine", "I Love You 💖"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter=""
                    deletingSpeed={10}
                    cursorBlinkDuration={0.5}
                    loop={false}
                    className='section6FinalTxt'
              
                  />}
                  <motion.div
                  onViewportEnter={()=>{
                    setTimeout(() => {
                        setSection6Txt(true)
                    }, 1500);
                   }}
                
                   onViewportLeave={()=>{
                    setSection6Txt(false)
                   }}
                  ></motion.div>

        </section>




    </motion.section>

   </section>

   </>
  )
}

export default Section6
