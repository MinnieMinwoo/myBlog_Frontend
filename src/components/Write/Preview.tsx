import React from "react";
import { Stack, Col } from "react-bootstrap";
import styled from "styled-components";

const PreviewContainer = styled.div`
  position: absolute;
  visibility: hidden;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  &.open {
    visibility: visible;
    animation-name: open;
    animation-duration: 0.5s;
    animation-duration: linear;
    @keyframes open {
      0% {
        height: 0%;
      }
      100% {
        height: 100%;
      }
    }
  }

  &.close {
    visibility: hidden;
    animation-name: close;
    animation-duration: 0.5s;
    animation-duration: linear;
    @keyframes close {
      0% {
        height: 100%;
        visibility: visible;
      }
      99.9% {
        height: 0.1%;
        visibility: visible;
      }
      100% {
        height: 0%;
        visibility: hidden;
      }
    }
  }
`;

interface Props {
  firstOpen: boolean;
  isHidden: boolean;
  image?: String;
  description?: String;
  onPreview: () => void;
}

const Preview = ({ firstOpen, isHidden, onPreview }: Props) => {
  return (
    <PreviewContainer className={`Preview ${isHidden ? (firstOpen ? "close" : "") : "open"}`}>
      <Col md={{ span: 5, offset: 1 }} xxl={{ span: 4, offset: 2 }}>
        <Stack>
          <h3>Preview</h3>
          <img alt="Thumbnail"></img>
          <input hidden type="file" accept="image/*" />
          <button>Upload Image</button>
        </Stack>
      </Col>
      <Col md={{ span: 5, offset: 6 }} xxl={{ span: 4, offset: 6 }}>
        <Stack direction="horizontal">
          <button onClick={onPreview}>Cancel</button>
          <button>Write Up</button>
        </Stack>
      </Col>
    </PreviewContainer>
  );
};

export default Preview;
