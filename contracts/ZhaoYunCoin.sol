// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BEP20.sol";

contract ZhaoYunCoin is BEP20 {

    constructor() BEP20("ZhaoYun Coin", "ZhaoYun") {
        uint256 _totalSupply = 100000000000*1e18;
        _mint(msg.sender, _totalSupply);
    }
}
