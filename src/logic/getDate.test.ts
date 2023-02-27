import getDate from "./getDate";

describe("Timestamp conversion test", () => {
  it("UNIX Timestamp 974726130 is equal to 2000. 11. 20", () => {
    expect(getDate(974726130 * 1000)).toBe("2000. 11. 20");
  });
  it("Border Test(low)", () => {
    expect(getDate(1677596399999)).toBe("2023. 02. 28");
  });
  it("Border Test(high)", () => {
    expect(getDate(1677596400000)).toBe("2023. 03. 01");
  });
});
