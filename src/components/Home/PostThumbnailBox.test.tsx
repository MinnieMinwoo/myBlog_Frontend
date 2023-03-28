import React from "react";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import PostThumbnailBox from "./PostThumbnailBox";

describe("Post thumbnailBox test", () => {
  const postData = [
    {
      id: "test1",
      createdAt: 1621814400000, //2021-5-24
      createdBy: "testUser",
      category: [],
      tag: "",
      thumbnailData: "test message1",
      thumbnailImageURL: "",
      title: "test1",
    },
    {
      id: "test2",
      createdAt: 1664582400000, //2022-10-1
      createdBy: "testUser",
      category: [],
      tag: "",
      thumbnailData: "test message2",
      thumbnailImageURL: "",
      title: "test2",
    },
    {
      id: "test3",
      createdAt: 1676419200000, //2023-2-15
      createdBy: "testUser",
      category: [],
      tag: "",
      thumbnailData: "test message3",
      thumbnailImageURL: "https://picsum.photos/200/300",
      title: "test3",
    },
  ] as PostData[];

  afterEach(() => cleanup);

  it("Single rendering test with image", () => {
    render(
      <MemoryRouter>
        <RecoilRoot>
          <PostThumbnailBox postList={[postData[2]]} />
        </RecoilRoot>
      </MemoryRouter>
    );
    expect(screen.getByText("test3")).toBeInTheDocument();
    expect(screen.getByText("test message3")).toBeInTheDocument();
    expect(screen.getByText("2023. 02. 15")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Single rendering test without image", () => {
    render(
      <MemoryRouter>
        <RecoilRoot>
          <PostThumbnailBox postList={[postData[1]]} />
        </RecoilRoot>
      </MemoryRouter>
    );
    expect(screen.getByText("test2")).toBeInTheDocument();
    expect(screen.getByText("test message2")).toBeInTheDocument();
    expect(screen.getByText("2022. 10. 01")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("Multiple rendering test", () => {
    render(
      <MemoryRouter>
        <RecoilRoot>
          <PostThumbnailBox postList={postData} />
        </RecoilRoot>
      </MemoryRouter>
    );
    expect(screen.getByText("test2")).toBeInTheDocument(); //test2
    expect(screen.getByText("test message3")).toBeInTheDocument(); //test3
    expect(screen.getByText("2021. 05. 24")).toBeInTheDocument(); //test1
  });

  it("anchor test", () => {
    render(
      <MemoryRouter>
        <RecoilRoot>
          <PostThumbnailBox postList={postData} />
        </RecoilRoot>
      </MemoryRouter>
    );
    const component = screen.getAllByRole("link");
    component.forEach((element, index) => {
      expect(element).toHaveAttribute("href", `/home/undefined/test${index + 1}`); //undefined because not set recoilState
    });
  });
});
