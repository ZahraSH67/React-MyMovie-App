import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";


const StyledBsBookmark = styled(BsBookmark)`
  color:black;
`;
const StyledFooterButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: white;
    border: none;
`
const FooterButton3 = () => {
    return ( 
       <StyledFooterButton>
            <StyledBsBookmark></StyledBsBookmark>
       </StyledFooterButton>
     );
}
 
export default FooterButton3;