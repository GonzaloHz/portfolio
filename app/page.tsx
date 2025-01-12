'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}
