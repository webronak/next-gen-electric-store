import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
width:100vw;
height:70vh;
position:relative;
`;

export const Absolute = styled.div`
position: absolute;
left: 50%;
top:50%;
transform: translate(-50%);
`;

export const Spinner = styled.div`
width: 70px;

    border-radius: 50%;
    height: 70px;
 
    border: 3px solid rgb(255 192 80 / 50%);
    border-top:3px solid #ff5e14;
    border-bottom:5px solid #ff5e14;
   animation: 1s spin infinite ease;

   @keyframes spin {
  
       to{
           transform: rotate(360deg);
       }
   }
`;