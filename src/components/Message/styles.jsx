import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: space-between;
    
    background-color: var(--soft-purple);
    padding: 20px 40px;
    justify-self: bottom;
    color: var(--white);
    border-radius: 0 12px 12px 12px;
    margin: 50px;
    
    
    .me{
        border-radius: 30% 0 30% 30% !important;
        justify-items: flex-end;
    }
    >aside{
        font-size: 10px;
    }
`;