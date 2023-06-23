import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Container = styled.div`
.update-form{
    display: flex;
    gap:16px;
    input{
        width: 400px;
    }
}
.item{
    display: flex;
    gap: 48px;
    align-items: center;
    
    .buttons{
        display: flex;
        gap:12px;
        align-items: center;
    }

}
 @media (max-width: ${theme.breakpoints.sm}) {
    .update-form{
    input{
        width: 150px;
    }
} 
.update-form, .item{
    flex-wrap: wrap;
    justify-content: center;
    gap:24px;
}

 }
`