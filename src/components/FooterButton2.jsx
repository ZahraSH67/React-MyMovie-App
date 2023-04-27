import styled from "styled-components";
import { RiTicketLine } from "react-icons/ri";


const StyledRiTicketLine = styled(RiTicketLine)`
  color:black;
`;
const StyledFooterButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: white;
    border: none;
`
const FooterButton2 = () => {
    return ( 
       <StyledFooterButton>
            <StyledRiTicketLine></StyledRiTicketLine>
       </StyledFooterButton>
     );
}
 
export default FooterButton2;