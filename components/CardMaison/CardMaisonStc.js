import styled from "styled-components";

const CardMaisonStc=styled.section`

flex-basis: 100%;
-webkit-box-flex: 0;
flex-grow: 0;
max-width: 100%;

box-sizing: border-box;
margin: 0px;
flex-direction: row;
flex-basis: 100%;
-webkit-box-flex: 0;
flex-grow: 0;
max-width: 100%;
display: flex;
-webkit-box-align: stretch;
align-items: stretch;

.div_image
{
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow: hidden;
    border-radius: 20px;
    margin: 15px;
    box-shadow: rgb(90 114 123 / 11%) 0px 7px 30px 0px;
    padding: 0px;
    width: 100%;
}

.MuiCardContent-root{
    padding:24px;
}

.MuiTypography-root
{
    margin: 0px;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
}

.libelle{
    margin: 0px;
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.87);
    display: block;
    text-decoration: none;
}

`;
export default CardMaisonStc;