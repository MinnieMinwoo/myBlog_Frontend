import styled, { CSSProperties } from "styled-components";

interface ActionProps {
  width?: number;
  height?: number;
  color?: CSSProperties;
}
export const ActionButton = styled.button<ActionProps>`
  margin: 0;
  width: ${(props) => props.width}px;
  line-height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height! / 2}px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  font-size: ${(props) => props.height! / 3}px;
  color: #fff;
  cursor: pointer;
`;
ActionButton.defaultProps = {
  width: 128,
  height: 64,
  color: "#555",
};
