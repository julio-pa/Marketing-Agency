import Error404 from "./containers/errors/Error404"
import Home from "./containers/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async';
// redux
import store from './store'
import { Provider } from 'react-redux'
import Cases from "./containers/pages/Cases"
import Services from "./containers/pages/Services"
import About from "./containers/pages/About"
import Careers from "./containers/pages/Careers"
import Blog from "./containers/pages/Blog"
import Contact from "./containers/pages/Contact"

function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>FrankBlack | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital" />
        <meta name="keywords" content="agencia de software, agencia de marketing" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.frankblack.com/" />
        <meta name="author" content="frankblack" />
        <meta name="publisher" content="frankblack" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/casos" element={<Cases />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/carreras" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider >
  )
}

export default App
