import styled, {keyframes} from "styled-components";
import theme from "../styles/theme";

const move = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 50%);
    }
    100% {
        transform: translate(0, 0);
    }
`;

const LoadingBar = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 11;
    
    span{
        display: inline-block;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${theme.color.white};
        
        &:nth-child(1){
            animation: ${move} 1s 0.1s linear infinite;
        }
        &:nth-child(2){
            animation: ${move} 1s 0.3s linear infinite;
        }
        &:nth-child(3){
            animation: ${move} 1s 0.5s linear infinite;
        }
    }
`;

function Loading() {
    return (
        <LoadingBar>
            <span></span>
            <span></span>
            <span></span>
        </LoadingBar>
    )
}

export default Loading;