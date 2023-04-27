import styled from "styled-components";

const StyledThemeMovie = styled.p`
    color: #88A4E8;
    background-color: #DBE3FF;
    width: 70px;
    height: 25px;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 5px;
    text-align: center;
    /* align-items: center; */
    font-size: 12px;
    padding-top: 5px;
    text-transform:uppercase;
`
const ThemeMovie = () => {
    return ( 
        <StyledThemeMovie >Theme </StyledThemeMovie>
    );
}
 
export default ThemeMovie;