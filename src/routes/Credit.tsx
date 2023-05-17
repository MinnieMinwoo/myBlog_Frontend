import React from "react";
import Footer from "../components/Share/Footer";
import Header from "../components/Share/Header";
import MetaTag from "../components/Share/MetaTag";

const Credit = () => {
  const creditArray: [string, string[], "The MIT" | "Apache 2.0"][] = [
    ["bootstrap", ["The Bootstrap Authors"], "The MIT"],
    ["cypress", ["2022 Cypress.io"], "The MIT"],
    ["eslint", ["OpenJS Foundation and other contributors"], "The MIT"],
    ["firebase-js-sdk", ["2008 Google Inc."], "Apache 2.0"],
    ["jest", ["Meta Platforms, Inc. and affiliates"], "The MIT"],
    ["react", ["Meta Platforms, Inc. and affiliates"], "The MIT"],
    ["react-dom", ["Meta Platforms, Inc. and affiliates"], "The MIT"],
    [
      "react-router-dom",
      ["2015-2019 React Training LLC", "2020-2021 Remix Software Inc.", "2022-2023 Shopify Inc."],
      "The MIT",
    ],
    ["react-scripts", ["Meta Platforms, Inc. and affiliates"], "The MIT"],
    ["react-beautiful-dnd", ["2019 Atlassian Pty Ltd"], "Apache 2.0"],
    ["react-helmet-async", ["2018 Scott Taylor"], "Apache 2.0"],
    ["recoil", ["Meta Platforms, Inc. and affiliates"], "The MIT"],
    ["rehype-toc", ["2019 James Messinger"], "The MIT"],
    ["sass", ["2006–2023 the Sass team"], "Apache 2.0"],
    ["testing-library/jest-dom", ["2017 Kent C. Dodds"], "The MIT"],
    ["testing-library/react", ["2017 Kent C. Dodds"], "The MIT"],
    ["testing-library/user-event", ["2020 Giorgio Polvara"], "The MIT"],
    ["typescript", ["2012-2023 Microsoft"], "Apache 2.0"],
    ["uuid", ["2010-2020 Robert Kieffer"], "The MIT"],
  ];

  return (
    <div className="Credit d-flex flex-column min-vh-100 overflow-x-hidden">
      <MetaTag title="myBlog" description="Make your own blog" />
      <Header />
      <section className="flex-grow-1 ">
        <div className="row">
          <div className="col col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
            <h1 className="text-center mt-2 mb-4">License credit</h1>
            {creditArray.map(([title, authorArray, license]) => (
              <div key={title}>
                <h4>{title}</h4>
                {authorArray.map((author) => (
                  <p>{`Copyright (c) ${author}`}</p>
                ))}
                <p>{`${license} license`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Credit;
