import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-padding-top: 4rem;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --main-color: #E09489;
        --second-color: #ffe8e6;
        --third-color: #94554B;
        --gray-color: #eee;
        --text-color: #1b1b1b;
        --bg-color: #fff;
        --box-shadow: 2px 2px 10px 4px rgb(14 55 54 / 15%);
    }
    img {
        width: 100%;
    }
    .btn {
        padding: 10px 40px;
        border-radius: 0.3rem;
        background: var(--main-color);
        color: var(--bg-color);
        font-weight: 500;

        &:hover {
        background: var(--third-color);
        }
    }
    .heading h2 {
        font-size: 1.8rem;
        text-transform: uppercase;
        text-align: center;
    }
    section {
        padding: 50px 100px;
    }
    @media (max-width: 1058px) {
        section {
            padding: 50px 60px;
        }
    }
    @media (max-width: 991px) {
        section {
            padding: 50px 4%;
        }
        .heading h2 {
            font-size: 1.6rem;
        }
    }
    @media (max-width: 620px) {
        * {
            scroll-padding-top: 2rem;
        }
    }
`;
export default GlobalStyles;
