const chai = require("chai");
const chaiHTTP = require("chai-http");
const expect = chai.expect;

chai.use(chaiHTTP);

// Assertion

describe("users API", () => {
  const baseURL = "http://localhost:7000";

  // Test for POST request to create a new user

  describe("POST /users", () => {
    it("It Should create a new user", (done) => {
      chai
        .request(baseURL)
        .post("/users")
        .send({
          name: "Bikash Upadhyay",
          email: "bikash@gmail.com",
          bio: "I want to become a big gambller",
        })
        .end((err, response) => {
          expect(response).to.have.status(201);
          expect(response.body).to.be.an("object");
          expect(response.body).to.have.property("name", "Bikash Upadhyay");
          expect(response.body).to.have.property("email", "bikash@gmail.com");
          expect(response.body).to.have.property(
            "bio",
            "I want to become a big gambller"
          );
          done();
        });
    });

    // If user given wrong end point
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
  });
});
