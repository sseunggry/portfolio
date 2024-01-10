import styled from "styled-components";


const ContactCon = styled.div`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1440px;
`;

const Info = styled.div`
    margin-top: 200px;
    margin-left: auto;
    width: fit-content;
`;

const TxtBox = styled.ul`
    li{
        margin-bottom: 0;
        font-size: 80px;
        font-weight: 500;
    }
`;

const LinkList = styled.ul`
    display: flex;
    margin-top: 60px;
  
    li{
        margin-right: 30px;
        font-size: 30px;
        font-weight: 500;
      
        &:last-of-type{
          margin-right: 0;
        }
    }
`;

export {ContactCon, Info, TxtBox, LinkList};