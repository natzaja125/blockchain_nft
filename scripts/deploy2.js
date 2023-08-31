async function main() {
    const Contract = await hre.ethers.getContractFactory('DGS');
    const contract = await Contract.deploy('0xd6a222C301785e969286bE5f21feF5dbEd1Fd728');
  
  
    await contract.deployed();
    console.log('Deployed to:', contract.address);
  }
  
  
  main()
      .then(() => process.exit(0))
      .catch((error) => {
          console.error(error);
          process.exit(1);
      });
  