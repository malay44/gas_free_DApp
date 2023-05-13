// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@opengsn/contracts/src/ERC2771Recipient.sol";
import "./Box.sol";

contract Box2 is Box, ERC2771Recipient {

    function setTrustForwarder(address forwarder) public {
        _setTrustedForwarder(forwarder);
    }

    function versionRecipient() external pure returns (string memory) {
        return "1";
    }
}