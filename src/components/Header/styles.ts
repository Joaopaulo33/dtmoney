import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;  
    margin: 0 auto;
    /* 1rem = tamanho do fontsize do root (16px pra desktop) 
    16px paddin nas laterais e 160px embaixo
    Os das laterais é pra caso diminuir a tela a logo não ficar colada
    */
    padding : 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size:1rem;
        color: #FFF;
        background: var(--blue-light);
        border:0;
        padding: 0 2rem;
        border-radius:0.25rem;
        height:3rem;
        transition: filter 0.2s;

        &:hover{
            filter:brightness(0.9);
        }
    }

`;
