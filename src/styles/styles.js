import styled from "Styled-components";
import bgimage from "../assets/bg.avif";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 100px;
  transition: 0.5s linear;

  &.shadow {
    background: var(--text-color);
    box-shadow: var(--box-shadow);
  }

  .logo img {
    width: 60px;
  }
  #menu-icon {
    color: var(--bg-color);
    font-size: 26px;
    z-index: 100001;
    cursor: pointer;
    display: none;
  }
  .navbar {
    display: flex;

    a {
      padding: 8px 17px;
      color: var(--bg-color);
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 500;

      &:hover {
        border-radius: 0.2rem;
        transition: 0.2s all linear;
      }
    }
  }
  .navbar.active {
    top: 100%;
  }
  .header-icon {
    font-size: 22px;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    column-gap: 0.8rem;

    .bx {
      color: var(--bg-color);

      &:hover {
        color: var(--main-color);
      }
    }
  }
  .search-box {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%);
    background: var(--bg-color);
    width: 100%;
  }
  .search-box input {
    padding: 20px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    color: var(--main-color);
  }
  .search-box.active {
    top: 110%;
    box-shadow: var(--box-shadow);
    transition: 0.2s all linear;
  }
  @media (max-width: 1058px) {
    padding: 16px 60px;
  }
  @media (max-width: 991px) {
    padding: 16px 40px;
  }
  @media (max-width: 768px) {
    padding: 12px 4%;

    #menu-icon {
      display: initial;
    }
    .navbar {
      position: absolute;
      top: -570px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      background: white;
      row-gap: 1.4rem;
      box-shadow: var(--box-shadow);
      transition: 0.3s;
      text-align: center;
      padding: 20px;
    }
    .navbar a {
      color: var(--text-color);
    }
    .navbar a:hover {
      background: var(--main-color);
      color: var(--bg-color);
    }
  }
  @media (max-width: 620px) {
    padding: 11px 4%;

    .logo img {
      width: 50px;
    }
  }
`;

/* ------------------------------------ Home ------------------------------- */

export const Homepage = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;

  .home-text h1 {
    font-size: 3.4rem;
    color: var(--bg-color);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .home-text p {
    font-size: 0.938rem;
    color: var(--bg-color);
    margin: 0.5rem 0 1.4rem;
    max-width: 600px;
  }
  .home-img {
    display: flex;
    justify-content: center;
  }
  .home-img img {
    width: 140px;
    padding-top: 20px;
  }
  @media (max-width: 1058px) {
    .home-text h1 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 991px) {
    .home-text h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 620px) {
    .home-text {
      padding: 35px 15px 0;
    }
    .home-text h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .home-img img {
      width: 130px;
      padding-top: 20px;
    }
  }
`;

/* ----------------------------------- Kits ----------------------------*/

export const Kitspage = styled.section`
  h2 {
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 20px;
  }
  .kits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, auto));
    gap: 1.5rem;
  }
  .kits-img img {
    border-radius: 0.5rem;
  }
  .kits-text p {
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
  }
`;

/* ----------------------------------- Products ----------------------------*/

export const HomeProducts = styled.section`
  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .align-seeplus {
    position: relative;
  }
  .seeplus {
    color: var(--main-color);
    font-size: 18px;
    text-decoration: underline;
    position: absolute;
    top: 30px;
    right: 0;

    &:hover {
      opacity: 0.8;
    }
  }
`;

/* --------------------------------- BoxesProducts -----------------------*/

export const HomeBoxProducts = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    object-position: center;
    padding: 20px;
    background: #f1f1f1;
    border-radius: 0.5rem;
  }
  h2 {
    color: #888;
    font-size: 0.938rem;
    text-transform: uppercase;
    padding-top: 10px;
    font-weight: 500;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0.5rem 0 0.5rem;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .content div {
    display: flex;
    opacity: 0.7;
  }
  .content span {
    padding: 5px 8px 5px 5px;
    color: var(--bg-color);
    background: var(--main-color);
    font-weight: 500;
    position: absolute;
    top: 30px;
    right: 10px;
  }
  .content a {
    padding: 5px 16px;
    color: var(--text-color);
    border: 2px solid var(--main-color);
    border-radius: 4px;
    text-transform: uppercase;
  }

  .content a:hover {
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }

  .content input {
    width: 50px;
    padding: 5px;
    border: 2px solid var(--main-color);
    border-left: none;
    border-right: none;
    outline: none;
    appearance: none;
  }
  .content input[type="number"]::-webkit-outer-spin-button,
  .content input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .content button {
    width: 20px;
    height: 29px;
    font-size: 21px;
    border: 2px solid var(--main-color);
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 13px;
    cursor: pointer;
  }
`;

/* ------------------------------------ Sócios ------------------------------*/

export const SociosPage = styled.section`
  .customers-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .customers-container .box {
    padding: 20px;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    text-align: center;
  }
  .stars {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
  .stars .bx {
    color: #ffa500;
  }
  .customers-container .box p {
    font-size: 0.938rem;
    padding-top: 15px;
  }
  .customers-container .box h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0 0.5rem;
  }
  .customers-container .box img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }
  .customers-container .box:hover {
    background: var(--gray-color);
    transition: 0.2s all linear;
  }
`;

/* ----------------------------------- Footer -------------------------------*/

export const Footerpage = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 1.5rem;

  .footer-box h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .footer-box p {
    font-size: 0.938rem;
    margin-bottom: 10px;
  }
  .social {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  .social a .bx {
    font-size: 24px;
    padding: 10px;
    background: var(--second-color);
    color: var(--text-color);
    border-radius: 0.2rem;
  }
  .social a .bx:hover {
    background: var(--third-color);
    color: var(--bg-color);
  }
  .footer-box h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 4px;
  }
  .footer-box li a {
    color: var(--text-color);
  }
  .footer-box li a:hover {
    color: var(--main-color);
  }
  .contact {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  .contact span {
    display: flex;
    align-items: center;
  }
  .contact i {
    font-size: 20px;
    margin-right: 0.8rem;
  }
`;

/* ----------------------------------- Copyright ----------------------------*/

export const Copyrightpage = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: 500;

  p a {
    color: #ffa500;
  }
  p a:hover {
    text-decoration: underline;
  }
`;
