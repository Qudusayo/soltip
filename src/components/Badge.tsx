import styled from "@emotion/styled";
import React from "react";

const BadgeContainer = styled.div`
  background-color: #512da8;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  filter: drop-shadow(0 4px 8px rgba(19, 22, 25, 0.2))
    drop-shadow(0 2px 4px rgba(19, 22, 25, 0.1));
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;

export default function Badge({
  toggleState,
  open,
}: {
  toggleState: () => void;
  open: boolean;
}) {
  return (
    <BadgeContainer onClick={toggleState}>
      {open ? (
        <ArowDown />
      ) : (
        <CoffeeCup width={40} height={40} stroke="#ffffff" strokeWidth={5} />
      )}
    </BadgeContainer>
  );
}

const ArowDown = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12}
        x2={12}
        y1={8.25}
        y2={15.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffffff" />
        <stop offset={1} stopColor="#ffffff" />
      </linearGradient>
    </defs>
  </svg>
);

const CoffeeCup = (props: React.SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M430.007 73.217h-8.661V65.21c0-7.039-5.49-12.762-12.397-13.24V36.857c0-7.353-5.981-13.334-13.332-13.334H200.72v-8.888c0-7.351-5.981-13.332-13.332-13.332h-41.506c-7.351 0-13.332 5.981-13.332 13.332v8.888h-16.166c-7.351 0-13.332 5.981-13.332 13.334V51.97c-6.907.478-12.397 6.201-12.397 13.24v8.006h-8.661c-7.348 0-13.326 5.978-13.326 13.326v33.446c0 7.348 5.978 13.326 13.326 13.326h12.269l55.517 352.542c2.266 14.393 14.487 24.841 29.059 24.841h154.323c14.572 0 26.793-10.448 29.059-24.841l55.517-352.542h12.269c7.348 0 13.326-5.978 13.326-13.326V86.543c0-7.348-5.978-13.326-13.326-13.326zM137.748 14.635c0-4.485 3.65-8.134 8.134-8.134h41.506c4.485 0 8.134 3.65 8.134 8.134v8.888h-57.775v-8.888zm-21.364 14.086h279.233c4.485 0 8.134 3.65 8.134 8.136v15.021H108.249V36.857c0-4.486 3.65-8.136 8.135-8.136zM95.852 65.21c0-4.485 3.638-8.134 8.109-8.134h304.078c4.471 0 8.109 3.65 8.109 8.134v8.006H95.852V65.21zm261.234 419.837c-1.865 11.851-11.928 20.453-23.925 20.453H178.838c-11.997 0-22.059-8.601-23.925-20.453L99.525 133.315h312.951l-55.39 351.732zm81.049-365.058c0 4.482-3.646 8.128-8.128 8.128-356.405-.018-335.605 0-348.014 0-4.482 0-8.128-3.646-8.128-8.128V86.543c0-4.482 3.646-8.128 8.128-8.128h348.014c4.482 0 8.128 3.646 8.128 8.128v33.446z" />
    <path d="M256.028 402.626c50.379 0 91.366-41.011 91.366-91.422 0-50.379-40.987-91.366-91.366-91.366-50.411 0-91.422 40.987-91.422 91.366 0 50.412 41.011 91.422 91.422 91.422zm0-177.589c47.513 0 86.168 38.654 86.168 86.168 0 47.544-38.654 86.224-86.168 86.224-47.544 0-86.224-38.68-86.224-86.224 0-47.513 38.68-86.168 86.224-86.168z" />
  </svg>
);
