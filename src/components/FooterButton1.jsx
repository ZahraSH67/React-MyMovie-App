import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";

import { SlClock } from "react-icons/sl";

const StyledRiMovie2Line = styled(RiMovie2Line)`
  color:black;
`;
const StyledFooterButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: white;
    border: none;
`
const FooterButton1 = () => {
    return ( 
       <StyledFooterButton>
            <StyledRiMovie2Line></StyledRiMovie2Line>
       </StyledFooterButton>
     );
}
 
export default FooterButton1;




