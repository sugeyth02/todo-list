import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Container = styled.form`
  margin-top: 56px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content:center ;
  }
`