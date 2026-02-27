"use client"
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useRef, useState } from 'react'

interface setStateProp {
  setSection6On:Dispatch<SetStateAction<boolean>>
  setOtherSecs:Dispatch<SetStateAction<boolean>>
}

function Section5({setSection6On, setOtherSecs}:setStateProp) {

    const section5Ref = useRef<null>(null)

    const {scrollYProgress:sec5Progress} = useScroll({
        target:section5Ref,
        offset:['start 60%', "end"]
    })

    const width = useTransform(sec5Progress, [0,1], ["0","100%"])


    ///////////////////////////// Buttons /////////////////////////

    const [imageLink, setImageLink] = useState("/svgs/pinkHeart.svg")

    const[imageRotate, setImageRotate] = useState(0)

    const [shake1, setShake1] = useState(0)

    const [shake2, setShake2] = useState(0)

    const [scaleYes, setScaleYes] = useState(1)


    const [yesTxt, setYestxt] = useState("")

    const noFunc= ()=>{
      setScaleYes(prev => prev + 0.1)

      if(yesTxt === ""){
        setYestxt("Nooo baby!")
      }

      if(yesTxt === "Nooo baby!"){
        setYestxt("😢 Over there →→")

      }

      if(yesTxt === "😢 Over there →→"){
        setYestxt("This button is invalid 🙂")

      }

      if(yesTxt === "This button is invalid 🙂"){
        setYestxt("Baby!, Click Yessss")

      }

      if(yesTxt === "Baby!, Click Yessss"){
        setYestxt("Nooo baby!")
 
      }
      
    }

    const yesFunc = ()=>{
      setSection6On(true)
      setOtherSecs(false)
    }


    ////////////////// Side Anim //////////////////

    const [sadAnim, setSadAnim] = useState(false)
    

    const [happyAnim, setHappyAnim] = useState(false)


    //////////////////// Background Color //////////////////

    const [BackgroundColor, setBackgroundColor] = useState("white")


  return (
    <>

    <motion.section className="section5" ref={section5Ref} style={{backgroundColor:BackgroundColor}}>

    <Image src={"/gifs/cherryTree.gif"} height={200} width={200} alt="love Design" unoptimized className="cherryTree" />
    <Image src={"/gifs/whiteFlower.gif"} height={150} width={150} alt="love Design" unoptimized className="whiteFlower" />

    <motion.p className="Section5Txt"
    style={{width:width}}
    ><span> You want to know what ?</span></motion.p>


    <div className='section5Img'>

    <motion.div className='' animate={{rotate:imageRotate}}><Image src={imageLink} height={350} width={350} alt='Hearts' /></motion.div>

    {sadAnim && <Image src={"/gifs/sec5Sad.gif"} height={200} width={200} alt="love Design" unoptimized className="sadAnim" />}
    {happyAnim && <Image src={"/gifs/sec5Happy.gif"} height={200} width={200} alt="love Design" unoptimized className="happyAnim" />}
    

    </div>


    <div className="section5Options">


       <motion.button className="noButton"

       animate={{rotate:shake1}}

       onHoverStart={()=>{
        setShake1(-10)
        setImageLink("/svgs/heartBreak.svg")
        setImageRotate(10)
        setSadAnim(true)
        setBackgroundColor("#00000071")
       }}

       onHoverEnd={()=>{
        setShake1(0)
        setSadAnim(false)
        setBackgroundColor("white")
        setImageRotate(0)
        setImageLink("/svgs/pinkHeart.svg")
        
       }}

       onClick={noFunc}

       > <span className='yesText'>{yesTxt}</span> Nah</motion.button>



       <motion.button className="yesButton"

        animate={{rotate:shake2, scale:scaleYes ,transition:{duration:0.3,ease:"backInOut"}}}

        onHoverStart={()=>{
          setShake2(10)
          setImageRotate(-10)
          setImageLink("/svgs/pinkHeart.svg")
          setHappyAnim(true)
          setBackgroundColor("pink")
         
         }}

         onHoverEnd={()=>{
          setShake2(0)
          setHappyAnim(false)
          setBackgroundColor("white")
          setImageRotate(0)
          setImageLink("/svgs/pinkHeart.svg")

         }}

         onClick={yesFunc}


       >Yea</motion.button>

     

    </div>

    

    </motion.section>

    </>
  )
}

export default Section5
