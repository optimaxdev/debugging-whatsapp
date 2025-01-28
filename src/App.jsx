import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Helmet} from "react-helmet";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Helmet>
            <meta data-react-helmet="true" property="og:url"
                  content="https://www.glassesusa.com/tortoise-medium/amelia-e-nettle/35-000407.html"/>
            <meta data-react-helmet="true" property="og:title"
                  content="Amelia E. Nettle Tortoise Eyeglasses | Includes Free Rx Lenses | GlassesUSA.com"/>
            <meta data-react-helmet="true" property="og:description"
                  content="The Amelia E. Nettle is an elegant frame that leaves a lasting impression. Crafted from high grade acetate, it features subtle rim curves, stylish silver rivets and refined arms with a rich hue."/>
            <meta data-react-helmet="true" property="og:type" content="website"/>vite
            <meta data-react-helmet="true" property="og:image"
                  content="https://optimaxdev.github.io/debugging-whatsapp/viteScreenshot.png"/>
            <meta data-react-helmet="true" property="og:site_name" content="GlassesUSA.com"/>
            <meta data-react-helmet="true" name="description"
                  content="The Amelia E. Nettle is an elegant frame that leaves a lasting impression. Crafted from high grade acetate, it features subtle rim curves, stylish silver rivets and refined arms with a rich hue."/>
            <meta data-react-helmet="true" name="keywords"
                  content="Eyeglasses, glasses, buy eyeglasses online, glasses frames online, prescription glasses, prescription eyeglasses, cheap eyeglasses, discount eyeglasses"/>
            <meta data-react-helmet="true" name="robots" content="index,follow"/>
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image:type" content="image/jpg"/>
            <meta property="og:locale" content="en_US"/>
        </Helmet>
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
            <img src='assets/viteScreenshot.png' className="screenShot" alt="screenShot"/>
        </div>
        <h1>Vite + React1</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
