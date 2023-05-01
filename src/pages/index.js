import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Landing from '../../Components/Landing'
import About from '../../Components/About'
import Skill from '../../Components/Skill'
import Projects from '../../Components/Projects'
import Papers from '../../Components/Papers'
import Contact from '../../Components/Contact'
import TimelineSection from '../../Components/TimelineSection'
import Footer from '../../Components/Footer'




export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,200;1,300;1,500;1,600;1,700;1,800;1,900;1,1000&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Landing />
      <About />
      <Skill />
      <Projects />
      <Papers />
      <TimelineSection />
      <Contact />
      <Footer />


    </>
  )
}
