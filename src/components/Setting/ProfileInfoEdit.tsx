import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { updateUserProfile } from "../../logic/getSetUserInfo";
import { loginData } from "../../states/LoginState";
import { Container, Form, Button, Stack } from "react-bootstrap";
import styled from "styled-components";

const ProfileInfo = styled(Container)`
  padding: 0 24px;
`;

const Nickname = styled.p`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: #111;
`;

const Description = styled.div`
  color: #333;
`;

const SelectButton = styled(Button)`
  width: 96px;
`;

const ProfileInfoEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [hidden, setHidden] = useState(true);
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setNickname(userData.nickname ?? "");
    setDescription(userData.description ?? "");
  }, [userData]);
  const onToggle = () => {
    setHidden((prev) => !prev);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "nickname") setNickname(value);
    else if (name === "description") setDescription(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userData.uid) throw window.alert("no user uid data");
    await updateUserProfile(userData.uid, nickname, description);
    setUserData((prev) => ({
      ...prev,
      nickname: nickname,
      description: description,
    }));
    setHidden(true);
  };

  return (
    <ProfileInfo>
      <div hidden={!hidden}>
        <Stack gap={2}>
          <Nickname>{userData.nickname}</Nickname>
          <Description>{userData.description}</Description>
          <SelectButton variant="outline-primary" onClick={onToggle}>
            Edit
          </SelectButton>
        </Stack>
      </div>
      <Form hidden={hidden} onSubmit={onSubmit}>
        <Stack gap={3}>
          <Form.Group controlId="nickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              name="nickname"
              placeholder="nickname"
              value={nickname}
              maxLength={20}
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="description"
              value={description}
              maxLength={100}
              onChange={onChange}
            />
          </Form.Group>
          <SelectButton type="submit">Save</SelectButton>
        </Stack>
      </Form>
    </ProfileInfo>
  );
};

export default ProfileInfoEdit;
