import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    background: ${({ theme }) => theme.body};
    z-index: -1000;
    scroll-behavior: smooth;
    transition: all 0.25s linear;

  }

  a {
  color: inherit;
  text-decoration: none;
}



p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.p};
  line-height: 2rem;
}
h1 {
  font-size: 4.5rem;
  font-family: cooper-black-std, serif;
  font-weight: 400;
  color: ${({ theme }) => theme.h1};
}
h4 {
  color: #5ce1e6;
}

h3 {
  font-size: 1.3rem;
  font-family: cooper-black-std, serif;
  font-weight: 400;
  color: #ff0000;
}
h6 {
  font-size: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  color: black;
}
.first-box{
  height: 100vh;
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 15px;
  
}

.second-box{
    height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 15px;
}
.navbarItems{
    border: 5px solid red;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 50%;
    background-color: white;
    color: white;
    @media screen and (max-width: 480px) {
      
    }
}
.card {
  line-height: 1rem;
}

.card-body {
  padding: 0 24px;
  margin-top: 1rem;
}

.card-text {
  margin-top: 1rem;
}

.btn {
  width: 45%;
  padding: 0 24px;
  margin: 0.2rem;
  font-size: 1rem;
  font-family: cooper-black-std, serif;

  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
}


nav{
    background: ${({ theme }) => theme.nav};
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.25s linear;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  .navLink{
    display: flex;
    color: red;
justify-content: center;
align-items: center;
text-decoration: none;
font-family: cooper-black-std, serif;
font-weight: 300;
font-style: normal;
font-size: 1rem;
padding: 0 1rem;
cursor: pointer;
  }
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }
  h3{
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
`;
