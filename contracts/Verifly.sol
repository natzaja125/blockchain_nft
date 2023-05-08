//SPDX-License-Identifier:UNLICENSE
pragma solidity  ^0.8.18;

contract Verifly {
    struct Data{
        string fullName;
        string courseName;
        string createdAt;
    }

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Not Authorized");
        _;
    }

    mapping (string => Data) public ipfs;

    function add(string memory _key, string memory _fullName, string memory _courseName, string memory _createdAt) public onlyOwner returns (string memory) {
        if (bytes(ipfs[_key].fullName).length > 0) {
            return "Data Exits";
        }
        ipfs[_key] = Data({
            fullName: _fullName,
            courseName: _courseName,
            createdAt: _createdAt
        });
        emit Added(ipfs[_key]);
        return "Success";
    }

    event Added(Data);

    function viewData(string memory _key) public view returns (Data memory) {
        return ipfs[_key];
    }
}