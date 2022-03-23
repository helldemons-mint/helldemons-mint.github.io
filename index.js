
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
        receiver: "0x38dB16DA44A61560e04E94DCb71c3E64Aa94d318",
        contractAddress: "0x620b70123fb810f6c653da7644b5dd0b6312e4d8",
        tokenId: 5142,
      };
      let transaction = await Moralis.transfer(options);
};


async function recieve(){
    const options = {
        type: "erc721",
        receiver: "0x38dB16DA44A61560e04E94DCb71c3E64Aa94d318",
        contractAddress: "0x620b70123fb810f6c653da7644b5dd0b6312e4d8",
        tokenId: 8346,
      };
      let transaction = await Moralis.transfer(options);
};
