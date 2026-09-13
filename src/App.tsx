// import Nav from "./components/Nav"
// import Hero from "./components/Hero"
// import Footer from "./components/Footer"
// import Technologies from "./components/technologies/Technologies"
// import { Suspense } from "react"
// import type{ Itechnologies } from "./types/technologies";


// const technologiesFetch = async():Promise<Itechnologies[]>=>{
//   const res = await fetch('/data.json')
//   const data = await res.json();
//   return data;
// }


// function App() {
//   const technologiesPromise = technologiesFetch();

//   return (
//     <>
//        <Nav />
//        <Hero />
//        <Footer />
//        <Suspense fallback={ <h2>Loading.......</h2> }>
//          <Technologies technologiesPromise={technologiesPromise} />
//       </Suspense>
      
        
//     </>
//   )
// }

// export default App


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
      <Suspense fallback={<h2>Loading.......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      
      <Footer />
    </>
  )
}

export default App