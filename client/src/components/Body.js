import { styled } from "styled-components";

import Overview from "./Overview";
import Transaction from "./Transactions";

const Master = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export function Body() {
  return (
    <Master>
      <Overview />
      <Transaction />
    </Master>
  );
}
