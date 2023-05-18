import React from "react";
import { Link } from "react-router-dom";
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
          <div className="col col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3 mb-4">
            <h1 className="text-center mt-2 mb-4">Credit</h1>
            <p className="mt-2 mb-4">
              This application uses Open Source Components. You can find the source code of their open source projects
              along with license information below.
            </p>
            {creditArray.map(([title, authorArray, license]) => (
              <div key={title}>
                <h4>{title}</h4>
                {authorArray.map((author) => (
                  <p className="mb-1">{`Copyright (c) ${author}`}</p>
                ))}
                <p className="mb-2">{`${license} license`}</p>
              </div>
            ))}
            <hr />
            <h3>License Texts</h3>
            <h5 className="mb-3">The MIT License</h5>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
              associated documentation files (the “Software”), to deal in the Software without restriction, including
              without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
              following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies or substantial
              portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
              EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
              IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
              THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
            <h5 className="mb-3">Apache License</h5>
            <p>
              Licensed under the Apache License, Version 2.0 (the “License”); you may not use this file except in
              compliance with the License. You may obtain a copy of the License at
            </p>
            <Link className="text-primary text-decoration-none" to="http://www.apache.org/licenses/LICENSE-2.0">
              http://www.apache.org/licenses/LICENSE-2.0
            </Link>
            <p className="mt-3">
              Unless required by applicable law or agreed to in writing, software distributed under the License is
              distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              See the License for the specific language governing permissions and limitations under the License.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Credit;
