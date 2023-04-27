import styled from "styled-components";
import FooterButton1 from "../components/FooterButton1";
import FooterButton2 from "../components/FooterButton2";
import FooterButton3 from "../components/FooterButton3";

const StyledFooter = styled.nav`
  height: 50px;
  /* width: 1440; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  /* border-bottom: 1px solid grey; */
  border-top: 1px solid rgba(41, 37, 39, 0.1);
  /* border: 1px solid grey; */
  padding-top: 10px;
  /* position: fixed; */
  position: fixed;
    bottom: 0;
    left: 0; 
  width: 100%;
  background-color:white; 

`;
const Footer = () => {
    return (  
        <StyledFooter>
            <FooterButton1 />
            <FooterButton2 />
            <FooterButton3 /> 
        </StyledFooter>
    
    );
}
 
export default Footer;