import styled from "styled-components";
import hash from './assets/hash.svg';

export const Container = styled.div`

     width: 100vw;
     min-height: 100vh;
     position: relative;
     * {
          font-family: 'Kantumruy Pro', sans-serif;
          list-style: none;
          transition: .2s;
     }

     #check{
          display: none;
     }

     .switch {
          position: absolute;
          background: linear-gradient(45deg, #FF409F, #AF25C0);
          width: 70px;
          height: 30px;
          border-radius: 40px;
          display: flex;
          cursor: pointer;
          align-items: center;
          padding: 1px;
          box-sizing: border-box;
          transition: all .2s ease-in-out;
          margin: 10px 0 0 10px;
     }

     .slider{
          position: absolute;
          background-color: white;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          transition: all .2s ease-in-out;
     }

     #check:checked ~ .switch {
          background: linear-gradient(45deg, #46C2CB, #2F58CD);
     }

     #check:checked ~ .switch .slider{
          transform: translateX(38px);
     }

     .logo-night, .btn-night {
          filter: hue-rotate(260deg);
     }


     .patt {
          width: inherit;
          min-height: inherit;
          display: grid;
          place-items: center;

          h1 {
               font-weight: 400;
               display: flex;
               align-items: center;
          }

          main {
               display: flex;
               align-items: center;
               justify-content: space-around;
               width: 90vw;

               ul {
                    width: 200px;

                    li {
                         font-size: 100px;
                         text-align: center;
                    }
               }

               tbody {
                    position: relative;
                    background: url(${hash});
                    background-size: 95%;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 450px;
                    height: 450px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    padding: 10px;
                    
                    tr {
                         height: 150px;
                         width: 450px;
                         position: relative;
                         display: flex;
                         td {
                              height: inherit;
                              width: 150px;
                              cursor: pointer;
                              border-radius: 15px;
                              font-size: 125px;
                              text-align: center;

                              :hover {
                                   background: rgba(82, 82, 82, .2);
                              }
                         }
                    }
               }
          }

          button {
               width: 170px;
               height: 50px;
               border-radius: 100px;
               border: none;
               display: flex;
               align-items: center;
               justify-content: space-evenly;
               font-size: 21px;
               cursor: pointer;
               transition: .1s;

               img {
                    object-fit: cover;
                    height: 60%;
               }
          }
     }

     .light {
          background: #ebecf0;

          * {
               color: #141414;
          }

          tbody {
               border: 1px solid #e0e0e0;
               box-shadow:inset -5px -5px 4px #ffffff,
                          inset 5px 5px 4px rgba(0, 0, 0, .25);
          }

          button {
               box-shadow: -3px -3px 4px #ffffff,
                          5px 5px 4px rgba(0, 0, 0, .15);
               background: #EBECF0;

               :active {
                    box-shadow: 3px 3px 4px #ffffff,
                          -5px -5px 4px rgba(0, 0, 0, .15);
                    background: #d6d7db;
                    font-size: 19px;

                    img {
                         height: 55%;
                    }
               }
          }

          .active {
               font-size: 140px;
               background: -webkit-linear-gradient(45deg, #FF409F, #AF25C0);
               background-clip: text;
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
          }
     }

     .night {
          background: #2c2c2c;

          * {
               color: #EBECF0;
          }

          tbody {
               border: 1px solid #333333;
               box-shadow: inset -4px -4px 4px rgba(255, 255, 255, .10),
                           inset 5px 5px 4px #222222;
          }

          button {
               box-shadow: -3px -3px 4px rgba(255, 255, 255, .15),
                           5px 5px 4px #222222;
               background: #2C2C2C;

               :active {
                    box-shadow: 3px 3px 4px rgba(255, 255, 255, .15),
                           -5px -5px 4px #222222;
                    background: #242424;
                    font-size: 19px;

                    img {
                         height: 55%;
                    }
               }
          }

          .active {
               font-size: 140px;
               background: -webkit-linear-gradient(45deg, #46C2CB, #2F58CD);
               background-clip: text;
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
          }
     }
`;