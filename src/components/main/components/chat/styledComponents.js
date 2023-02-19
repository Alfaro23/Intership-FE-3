import styled from "styled-components";

export const ChatContainer = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 15px 0;
    border-left: 1px solid white;
    border-radius: 8px;
    background: url(${({chatBackgroundImage}) => chatBackgroundImage})};
`;

export const MessagesWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const UserMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: ${({ isSelfMessage }) => isSelfMessage ? 'auto' : 0};
    border-radius: 8px;
    padding: 10px 5px;
    min-width: 30%;
    max-width: 60%;
`;

export const UserInfo = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 8px 8px 0 0;
  padding: 0 12px;
`;

export const UserName = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 5px;
    align-items: center;
    width: 100%;
    font-size: 12px;
`;

export const Name = styled.span`
    color: #56bab7;
`;

export const UserMessage = styled.div`
    width: 100%;
    height: 100%;
    padding: 17px 6px;
    color: white;
    border-radius: 0 0 8px 8px;
    background: linear-gradient(4deg, #00000057, transparent);
    box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
`;

export const Message = styled.span`
   word-wrap: break-word;
   line-height: 22px;
`;