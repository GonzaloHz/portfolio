'use client'
import About from "./components/About";
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
    </div>
  );
}
