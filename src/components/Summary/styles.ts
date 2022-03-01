import styled from "styled-components";

export const Container = styled.div`
    //como são três um do lado do outro. Poderia se flex também
    display: grid;
    //mesma coisa que fazer 1fr 1fr 1fr
    grid-template-columns: repeat(3,1fr);
    //espassamento
    gap:2rem;
    margin-top: -10rem;

div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius:0.25rem;
    color: var(--text-title);

    header{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
     strong{
         // pois o strong vem com o display inline ( não permite magin-top)
         display: block;
         margin-top:1rem;
         font-size:2rem;
         font-weight: 500;
         line-height:3rem;
     }
     &.highlight-background{
         background-color: var(--green);
     }
}

`;