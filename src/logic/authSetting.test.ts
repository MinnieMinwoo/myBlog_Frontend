/**
 * @jest-environment node
 */

import { FirebaseError, initializeApp } from "firebase/app";
import * as authSetting from "./authSetting";
import { deleteUser, getAuth } from "firebase/auth";

describe("auth seting test", () => {
  beforeAll(async () => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
      appId: process.env.REACT_APP_APP_ID,
    };

    initializeApp(firebaseConfig);
  });

  afterAll(async () => {});

  it("sign in / sign out test", async () => {
    await expect(
      authSetting.signInEmail(process.env.TEST_EMAIL as string, process.env.TEST_PASSWORD as string)
    ).resolves.toBe("Minnie");
    await authSetting.signOutUser();

    await expect(authSetting.signInEmail("1", "2")).rejects.toHaveProperty("code", "auth/invalid-email");
  });

  /*
  it("sign up test", async () => {
    await expect(
      authSetting.signUpEmail("test1234@gmail.com", "testpassword12345" as string)
    ).resolves.toBe(null);
    const auth = getAuth();
    await authSetting.deleteUser(auth.currentUser);
  });
  */
});
