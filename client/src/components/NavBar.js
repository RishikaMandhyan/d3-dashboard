import { styled } from "styled-components";

const MasterContainer = styled.div`
  box-sizing: border-box;
  width: 224px;
  background: #1e2640;
  display: flex;
  padding: 16px 10px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
const NavTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  position: relative;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 192px;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  // align-self: stretch;
  gap: 4px;

  .storeTitle {
    color: var(--Black-100, #fff);
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    cursor: pointer;
  }
  .visitStore {
    color: var(--Black-100, #fff);
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    text-decoration-line: underline;
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Icon = styled.span`
  position: absolute;
  right: 0;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const ListItem = styled.div`
  color: white;
  background: #1e2640;
  display: flex;
  width: 176px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  cursor: pointer;
  // border-radius: 4px;
  // background: rgba(255, 255, 255, 0.10);

  .navbarItem {
    color: var(--Black-100, #fff);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    opacity: 0.8;
  }

  &:hover {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavBottom = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 192px;
  padding: 6px 12px;
  border-radius: 4px;
  background: #353c53;
`;
const Image = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 4px;
  background: url("./2aid9h8lGHcOOVIZGPdcpd055oI.svg"),
    lightgray 50% / contain no-repeat;
`;

const BottomIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  margin-right: 12px;
`;
const BottomContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

.credits{

color: var(--Black-100, #FFF);
font-size: 13px;
font-weight: 400;
line-height: 16px;
opacity: 0.8;
}


.creditamount{
 color: var(--Black-100, #FFF);
font-size: 16px;=
font-weight: 500;
line-height: 24px; 
}
`;

export default function NavbarContainer({ navbarItems }) {
  return (
    <MasterContainer>
      <NavTop>
        <IconBox>
          <Image />
          <Title>
            <span className="storeTitle">Nishyan</span>
            <span className="visitStore">Visit store</span>
          </Title>

          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                fill="white"
              />
            </svg>
          </Icon>
        </IconBox>

        <NavList>
          {navbarItems.map((item) => {
            return (
              <ListItem>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Navbar Icon">
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.75 13.75H1.47727C0.661397 13.75 0 13.1904 0 12.5V3.75C0 3.05964 0.661397 2.5 1.47727 2.5H14.7727C15.5886 2.5 16.25 3.05964 16.25 3.75L16.25 6.25H18.5227C19.3386 6.25 20 6.8796 20 7.65625V16.0938C20 16.8704 19.3386 17.5 18.5227 17.5H5.22727C4.4114 17.5 3.75 16.8704 3.75 16.0938V13.75ZM5 6C4.17157 6 3.5 6.67157 3.5 7.5V12.25H1.5V4H14.75L14.75 6H5ZM11.875 14.375C13.2557 14.375 14.375 13.2557 14.375 11.875C14.375 10.4943 13.2557 9.375 11.875 9.375C10.4943 9.375 9.375 10.4943 9.375 11.875C9.375 13.2557 10.4943 14.375 11.875 14.375Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <span className="navbarItem">{item.name}</span>
              </ListItem>
            );
          })}
        </NavList>
      </NavTop>
      <NavBottom>
        <BottomIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
              fill="white"
            />
          </svg>
        </BottomIcon>
        <BottomContent>
          <span className="credits">Available credits</span>
          <span className="creditamount">222.10</span>
        </BottomContent>
      </NavBottom>
    </MasterContainer>
  );
}
