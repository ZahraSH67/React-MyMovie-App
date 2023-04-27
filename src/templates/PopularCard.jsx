import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";
import ThemeMovie from "../components/ThemeMovie";
import Time from "../components/Time";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  justify-content: space-around;
  padding-left: 2rem;
`;

const PopularCard = () => {
  return (
    <StyledArticle>
      <figure>
        <Image />
      </figure>
      <div className="themeInformation">
      <Heading title="Venom Let There Be Carnage" size="14" as="h3" />
      <MovieRating />
        <div className="themes">
            <ThemeMovie />
            <ThemeMovie />
            <ThemeMovie />
        </div>
      <Time />
      </div>

    </StyledArticle>
  );
};

export default PopularCard;
