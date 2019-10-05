pragma solidity >=0.4.26 <0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract ScepterCash is ERC20, ERC20Detailed {
  constructor(address addr, uint256 amount, string memory name, string memory symbol, uint8 decimals) public ERC20Detailed(name, symbol, decimals) {
    _mint(addr, amount);
  }
}
