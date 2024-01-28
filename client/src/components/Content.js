import { styled } from "styled-components";

import { Header } from "./Header";
import { Body } from "./Body";

const Master = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  position: absolute;
  left: 224px;
`;

export default function Content() {
  return (
    <Master>
      <Header />
      <Body />
    </Master>
  );
}
