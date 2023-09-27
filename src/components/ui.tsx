import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Container = styled.div<{ open?: boolean }>`
  background-color: #ffffff;
  color: #253549;
  width: 300px;
  margin: 0 auto;
  border-radius: 0.75rem;
  padding: 1.5rem;
  padding-top: 3rem;
  word-break: break-word;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  right: 1rem;
  bottom: 6rem;
  z-index: 100;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-family: "Borel", cursive;
  color: #512da8;
`;

const Button = styled.button`
  background-color: #512da8;
  color: white;
  font-size: 1rem;
  width: 100%;
  padding: 0.875rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Figtree", sans-serif;
  user-select: none;

  &:hover {
    background-color: #2c2d30;
  }

  &:disabled {
    background-color: #512da8;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Frame = styled.div`
  border: 1px solid;
  border-radius: 0.5rem;
  border-color: #512da8c5;
  background-color: #ece3fb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Input = styled.input`
  width: 35px;
  height: 35px;
  font-size: 1.1em;
  text-align: center;
  padding: 0 0.2em;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 5px;
  color: #512da8;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const rotateCircle = keyframes`
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
`;

const iconLineTip = keyframes`
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }
    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }
    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
`;

const iconLineLong = keyframes`
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    84% {
        width: 55px;
        right: 0px;
        top: 35px;
    }
    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
`;

const SuccessCheckmark = styled.div`
  width: 80px;
  height: 115px;
  margin: 0 auto;
`;

const CheckIcon = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #512da8;

  &::before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }

  &::after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: ${rotateCircle} 4.25s ease-in;
  }

  &::before,
  &::after {
    content: "";
    height: 100px;
    position: absolute;
    background: #ffffff;
    transform: rotate(-45deg);
  }
`;

const IconLine = styled.span`
  height: 5px;
  background-color: #512da8;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;

  &.line-tip {
    top: 46px;
    left: 14px;
    width: 25px;
    transform: rotate(45deg);
    animation: ${iconLineTip} 0.75s;
  }

  &.line-long {
    top: 38px;
    right: 8px;
    width: 47px;
    transform: rotate(-45deg);
    animation: ${iconLineLong} 0.75s;
  }
`;

const IconCircle = styled.div`
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid #522da880;
`;

const IconFix = styled.div`
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #ffffff;
`;

const StartButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #512da8;
  text-decoration: underline;
  margin-top: 2rem;
  cursor: pointer;
  font-family: "Figtree", sans-serif;
`;

export {
  Container,
  Button,
  Title,
  Frame,
  Input,
  CheckIcon,
  SuccessCheckmark,
  IconLine,
  IconCircle,
  IconFix,
  StartButton,
};
