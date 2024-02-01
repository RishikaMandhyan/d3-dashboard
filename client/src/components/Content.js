import { styled } from "styled-components";

import { Header } from "./Header";
import { Body } from "./Body";

const Master = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`;

export default function Content() {
  return (
    <Master>
      <Header />
      <Body />
    </Master>
  );
}
