const { expect } = require("chai");

describe("DEX", () => {
  let tokenSupply = "100";
  let token;
  let dex;

  let price = 100;

  let owner;
  let addr1;
  let addr2;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy(tokenSupply);

    const DEX = await ethers.getContractFactory("DEX");
    dex = await DEX.deploy(token.address, price);
  });

  describe("Sell", () => {
    it("Should fail if contract is not approved", async () => {
      await expect(dex.sell()).to.be.reverted;
    });

    it("Should allow DEX to transfer tokens", async () => {
      await token.approve(dex.address, 100);
    });
  });

  describe("Getters", () => {});

  describe("Buy", () => {});

  describe("Withdraw tokens", () => {});

  describe("Withdraw funds", () => {});
});
