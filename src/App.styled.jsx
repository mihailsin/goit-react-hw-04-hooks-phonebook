import styled from 'styled-components';

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1;
  justify-items: center;
  @media screen and (min-width: 320px) {
    width: 290px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const GridContainer = styled.div``;

export { Grid, GridContainer };
