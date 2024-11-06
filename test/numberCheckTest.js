const supertest = require("fix-esm").require("supertest");
const chai = require("fix-esm").require("chai");
const expect = chai.expect;
const app = require("../app.js");
const request = supertest(app);

describe("Addition of Valid Numbers Check", function () {
  it("should return 0 if empty string is passed", async function () {
    const response = await request.post("/getNumbers").send({ data: "" });
    expect(response.status).to.equal(200);
    expect(response.body.output).to.equal(0);
  });

  it("should return same number if string contains single positive number", async function () {
    const response = await request.post("/getNumbers").send({ data: "1" });
    expect(response.status).to.equal(200);
    expect(response.body.output).to.equal(1);
  });

  it("should return sum of positive numbers if string contains multiple positive number", async function () {
    const response = await request
      .post("/getNumbers")
      .send({ data: "//;\n1;2" });
    expect(response.status).to.equal(200);
    expect(response.body.output).to.equal(3);
  });

  it("should return all negative numbers if string contains multiple negative numbers", async function () {
    let result = ["-1", "-2"];
    const response = await request.post("/getNumbers").send({ data: "-1-2" });
    expect(response.status).to.equal(200);
    expect(response.body.output).deep.to.equal(result);
  });
});
