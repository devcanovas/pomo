import styled from "styled-components";
import { appWindow } from "@tauri-apps/api/window";

const MenuContainer = styled.div`
  border-top: 1px solid #2e2e2e;
  padding: .5rem;
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
  padding: .5rem;
  transition: .5s;
  &:hover {
    background-color: #2e2e2e;
    cursor: pointer;
    letter-spacing: .1rem;
  }
`;

export default function MenuTools() {
  return (
    <MenuContainer>
      <MenuButton>Settings</MenuButton>
      <MenuButton onClick={() =>appWindow.close()}>Quit</MenuButton>
    </MenuContainer>
  );
}
