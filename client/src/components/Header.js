import { styled } from "styled-components";

const Master = styled.div`
  display: flex;
  padding: 8px 32px;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #d9d9d9;
  background: #fff;
`;
const Payments = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  font-size: 15px;
  line-height: 22px;

  .payments {
    color: #1a181e;
    font-weight: 400;
  }

  .howItWorks {
    color: #4d4d4d;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;
const PaymentSub = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Search = styled.div`
  display: flex;
  width: 368px;
  padding: 7px 16px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 6px;
  background: #f2f2f2;

  .searchInput {
    width: 100%;
    color: #808080;
    font-weight: 400;
    border: none;
    font-size: 15px;
    line-height: 22px;
    background: transparent;
    outline: none;
  }
`;

const Logout = styled.button`
  background-color: #1e2640;
  color: white;
  border-radius: 4px;
  height: 36px;
  padding: 0px 12px;
  border: none;
  cursor: pointer;
`;

export function Header() {
  async function handleLogout() {
    try {
    } catch (err) {}
  }

  return (
    <Master>
      <Payments>
        <span className="payments">Payments</span>
        <PaymentSub>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <g clip-path="url(#clip0_71368_2522)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z"
                fill="#4D4D4D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z"
                fill="#4D4D4D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_71368_2522">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="howItWorks">How it works</span>
        </PaymentSub>
      </Payments>
      <Search>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_71368_2526)">
            <path
              d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
              fill="#808080"
            />
          </g>
          <defs>
            <clipPath id="clip0_71368_2526">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          className="searchInput"
          placeholder="Search features, tutorials, etc."
        />
      </Search>
      <Logout onClick={handleLogout}>Logout</Logout>
    </Master>
  );
}
