import styled from "styled-components";

const PageHeaderStc=styled.section`
    h1{
        margin: 0px;
        font-size: 1.875rem;
        font-family: "DM Sans", sans-serif;
        font-weight: 700;
        line-height: 1.235;
        display: block;
        width:100%;
    }
    

    nav{
        margin: 0px;
        font-weight: 400;
        font-family: "DM Sans", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: rgb(119, 126, 137);
    }

    ol{
        display: flex;
        flex-wrap: wrap;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
        margin: 0px;
        list-style: none;

        margin: 0px;
        font-weight: 400;
        font-family: "DM Sans", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: rgb(119, 126, 137);

        a{
            margin: 0px;
            color: inherit;
            text-decoration: none;
        }

        svg{
            user-select: none;
            width: 1em;
            height: 1em;
            display: inline-block;
            fill: currentcolor;
            flex-shrink: 0;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            font-size: 1.25rem;
            margin-top: 0px;
        }
    }

    .main_bar{
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        padding: 15px;
    }
`;
export default PageHeaderStc;