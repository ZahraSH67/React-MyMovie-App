import styled from "styled-components";
import { SlClock } from "react-icons/sl";

const StyledSlClock = styled(SlClock)`
  color:black;
`;
const StyledP = styled.p`
  margin-left: 4px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const Time = () => {
    return ( 
        <StyledDiv>
               <StyledSlClock />
            <StyledP>1h 47min</StyledP>
        </StyledDiv>
         
        
     );
}
 
export default Time;