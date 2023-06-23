import styled from 'styled-components';
import { theme } from './Theme';

export const Title = styled.h1`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 36px;
   line-height: 44px;
   color: ${theme.colors.gray};
   opacity:0.75;
   text-align: center;

   @media (max-width: ${theme.breakpoints.lg}) {
     font-size: 24px;
     line-height: 29px;
   }
`
export const SubTitle = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    color:${theme.colors.gray};

    @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 16px;
    line-height: 19px;
   }
`
export const Paragraph = styled.p`
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 200;
   text-align: center;
   font-size: 20px;
   line-height: 24px;
  color:${theme.colors.gray};
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 16px;
    line-height: 19px;
   }
`
export const Item = styled.li<{ complete: boolean }>`
   display: flex;
   gap: 8px;
   align-items: center;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 300;
   font-size: 24px;
   width: 400px;
   line-height: 28px;
   text-decoration:  ${({ complete }) => complete ? 'line-through' : 'none'};
   
   &:hover{
      cursor: pointer;
   }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 16px;
    line-height: 19px;
    width: 150px;
   }
`