import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import About from "./components/About";
import Times from "./components/Times";
import ScrollButton from "./components/ScrollButton";
import Experience from "./components/Experience";







const Container = styled.div`
  height: 100vh;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  scrollbar-width: auto;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    
    <Container>
     <ScrollButton/>
      <Hero />
      
      <Who />
      
      
      <Works />
      <About/>
      <Experience/>
      <Contact/>
      
    </Container>
       
  );
}

export default App;

