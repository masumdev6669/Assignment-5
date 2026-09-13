import { ToastContainer } from 'react-toastify';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Technologies from "./components/technologies/Technologies"
import { Suspense } from "react"
import type { ITechnologies } from "./types/technologies";

const technologiesFetch = async (): Promise<ITechnologies[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav />
      <Hero />
      
      {/* Moved Suspense here, between Hero and Footer */}
      <Suspense fallback={
    <div className="flex flex-col items-center justify-center p-20 min-h-[400px]">
      <span className="loading loading-spinner loading-lg text-pink-500"></span>
      <p className="mt-4 text-gray-500 font-medium">Loading Technologies...</p>
    </div>
  }
>
  <Technologies technologiesPromise={technologiesPromise} />
</Suspense>
      
      <Footer />
       <ToastContainer position="bottom-right" autoClose={3000} />

    </>
  )
}

export default App