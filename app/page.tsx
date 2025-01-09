'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-red-300">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}
