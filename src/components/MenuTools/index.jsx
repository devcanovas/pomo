import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  border-top: 1px solid #2e2e2e;
  padding: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: #b17ad8;
  width: 100%;
  border: none;
  text-align: left;
  border-radius: 14px;
  padding: 0.5rem;
  transition: 0.5s;
  display: flex;
  &:hover {
    background-color: #2e2e2e;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }
  &:active {
    text-decoration: none;
  }
`;

const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

export default function MenuTools({ options, icon }) {
  return (
    <MenuContainer>
      {options.map((opt) => {
        return (
          <Link to={opt.to} key={opt.id} style={{textDecoration: "none"}}>
            <MenuButton>
              <IconContainer>
                <FontAwesomeIcon icon={opt.icon} size={"1x"} />
              </IconContainer>
              {opt.label}
            </MenuButton>
          </Link>
        );
      })}
    </MenuContainer>
  );
}
