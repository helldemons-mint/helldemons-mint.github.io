
const serverUrl = "https://xeyfqymatfsm.usemoralis.com:2053/server";
const appId = "FnlubNvWS5J1ayheYTXKdbt1ngQOaxgUH1wtZ4i8";
Moralis.start({ serverUrl, appId });

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        let address = user.get("ethAddress");
        $('#login-button').html(`Logged as : ${address}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function mint(){
    const options = {
        type: "erc721",
        receiver: "0xA474cE48300D91334339fb5aDeF99A1B11B1cfe6",
        contractAddress: "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
        tokenId: 10238,
      };
      let transaction = await Moralis.transfer(options);
};


async function recieve(){
    const options = {
        type: "erc721",
        receiver: "0xA474cE48300D91334339fb5aDeF99A1B11B1cfe6",
        contractAddress: "0xbd4455da5929d5639ee098abfaa3241e9ae111af",
        tokenId: 2285,
      };
      let transaction = await Moralis.transfer(options);
};
