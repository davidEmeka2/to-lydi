"use client"

import { RefObject, useState } from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"


interface stateProps{

  bgMusic:RefObject<HTMLAudioElement | null>
}

function Sections({bgMusic}:stateProps) {

  const [section6On, setSection6On] = useState(false)
  const [otherSecs, setOtherSecs] = useState(true)

  return (
  <>
  
  {otherSecs  && <Section1 bgMusic={bgMusic} />}
  {otherSecs  && <Section2/>}
  {otherSecs  && <Section3/>}
  {otherSecs  && <Section4/>} 
  {otherSecs  && <Section5 setSection6On={setSection6On} setOtherSecs={setOtherSecs}  />}
  {section6On && <Section6 bgMusic={bgMusic}/>}

  </>
  )
}

export default Sections
