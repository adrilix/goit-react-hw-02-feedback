import styled from 'styled-components';

export const StyledProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
background-color: lightgrey;
padding: 40px 0px 0px 0px;
margin: 10px auto;
border: 2px solid #888585;
border-radius: 20px;
box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
&:hover,
&:focus{
        border-radius: 24px;  
        box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
        background-color: #ece2e2;
        cursor: pointer;
}
`;

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: #37355a;
font-size: 24px;
margin: 0px;
`;

export const StyledImg = styled.img`
        max-width: 230px; 
        display : flex 
`;

export const StyledText = styled.p `

        color: blue;
        font-size : 38px ;
        margin: 10px 0px 0px 0px;
`;

export const StyledUl = styled.ul`
margin: 5px;
padding: 10px, 10px;
list-style: none;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-inline-start: 0px;

margin-block-end: 0px;
`;

export const StyledLi = styled.li`
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;;
justify-content: center;
background-color: #e2e0ea ;
border: 1px solid #888585;
border-radius: 17px;
`;

export const StyledSpan = styled.span`
        font-size: 18px;
        display: flex;
        margin: 20px;
`;