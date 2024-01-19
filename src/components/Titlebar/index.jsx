import styled from "styled-components";
import { appWindow } from "@tauri-apps/api/window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

const TitlebarContainer = styled.div`
  height: 30px;
  background: transparent;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const TitlebarButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;

export default function Titlebar() {
  return (
    <TitlebarContainer data-tauri-drag-region>
      <TitlebarButton onClick={() => appWindow.minimize()}>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </TitlebarButton>
      <TitlebarButton onClick={() => appWindow.close()}>
        <FontAwesomeIcon icon={faWindowClose} />
      </TitlebarButton>
    </TitlebarContainer>
  );
}
