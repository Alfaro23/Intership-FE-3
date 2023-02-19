import styled from 'styled-components';

export const ButtonText = styled.span`
    font-size: ${props => (props.fontSize)};
    color: ${props => (props.isInversionTextColor ? 'white' : '#56bab7')};
`;

export const CustomButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    border: 2px solid ${props => (props.borderColor)};
    border-radius: 3px;
    cursor: pointer;
    background: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    
    &:active {
        background: ${props => (props.activeBackgroundColor ? props.activeBackgroundColor : '#56bab7')};
      
       ${ButtonText} {
          color: white;
       }
    }
       
    ${props => props.isDisabled && `    
        pointer-events: none;
        opacity: 0.4;
    `}   
`;

export const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    user-select: none;
`;