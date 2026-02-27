"use client"

import { useEffect, useRef, useState } from "react";
import Loading from "./Components/Loading";
import "./CSS/loading.css"
import Lenis from "lenis";
import Sections from "./Components/Sections";
import "./CSS/Section1.css"
import "./CSS/Section2.css"
import "./CSS/Section3.css"
import "./CSS/Section4.css"
import "./CSS/Section5.css"
import "./CSS/Section6.css"





export default function Home() {


 useEffect(()=>{
  const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

   requestAnimationFrame(raf);
},[])

//////////////////// Sections ////////////////////

const [sectionsOpen , setSectionsOpen] = useState(true)



///////////////// background Music ///////////////////


const bgMusic = useRef<HTMLAudioElement | null> (null)

useEffect(()=>{

  bgMusic.current = new Audio("/Idea22.mp3")

  bgMusic.current.loop = true; 
},[])



  return (
  <>

   {sectionsOpen ? 

   <Loading  setSectionsOpen={ setSectionsOpen} bgMusic={bgMusic}  />:

   <Sections  bgMusic={bgMusic}/>}

  </>
  );
}
