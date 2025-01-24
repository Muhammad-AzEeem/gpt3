import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers"; // == step 3

import { CTA, Brand, Navbars } from "./components"; // == step 4
import "./App.css";

function App() {
  return (
    // == step 5 is add class name App & gradient__bg  and add all the components
    <div className="App">
      <div className="gradient__bg">
        <Navbars />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

// == step 1 create articles,brand,cta,navbar,feature folder and jsx files and css files
// == step 2 create container box and created blog, features, header, footer, possibility, whatGPT3 folders and jsx filex and css files
// == step 6 create app.css file and index.css
