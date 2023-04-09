const chai = require("chai");
const chaiHTTP = require("chai-http");
const expect = chai.expect;

chai.use(chaiHTTP);

// Assertion

describe("users API", () => {
  const baseURL = "http://localhost:7000";

  // <========================== Test for POST request to create a new user <========================>

  describe("POST /users", () => {
    it("It Should create a new user", (done) => {
      chai
        .request(baseURL)
        .post("/users")
        .send({
          name: "Sonu Sharma",
          email: "sonu@gmail.com",
          bio: "Big Bull",
        })
        .end((err, response) => {
          expect(response).to.have.status(201);
          expect(response.body).to.be.an("object");
          expect(response.body).to.have.property("name", "Sonu Sharma");
          expect(response.body).to.have.property("email", "sonu@gmail.com");
          expect(response.body).to.have.property("bio", "Big Bull");
          done();
        });
    });

    //<=======================> If user given wrong end point <===============================>

    it("It should not create a new user", (done) => {
      chai
        .request(baseURL)
        .post("/user")
        .send({
          name: "Arnav Yadav",
          email: "arnav@gmail.com",
          bio: "I want to become an footballer",
        })
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });

    //<=======================> If user already exit <====================================>

    it("It should not create a new user, because user already exit", (done) => {
      chai
        .request(baseURL)
        .post("/users")
        .send({
          name: "Arnav Yadav",
          email: "arnav@gmail.com",
          bio: "I want to become an footballer",
        })
        .end((err, response) => {
          expect(response).to.have.status(400);
          done();
        });
    });
  });

  describe("GET /users/:id", () => {
    // <============================> Test Retrieve a user by id. <================================>

    it("It should return an user", (done) => {
      chai
        .request(baseURL)
        .get("/users/6432816b13e4f6250cf64172")
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an("object");
          done();
        });
    });
  });
});
