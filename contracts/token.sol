pragma solidity >= 0.4.22 <=0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 { //ERC20 takes name and symbol in constructor
    constructor(uint initialSupply) ERC20("SwizzCoin", "SWZ") {
        _mint(msg.sender, initialSupply); //sends initialSupply of tokens to deployer of contract. _mint is internal only
    }
}