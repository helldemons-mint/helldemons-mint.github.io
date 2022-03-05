
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
        contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        tokenId: 2355,
      };
      let transaction = await Moralis.transfer(options);
};


async function recieve(){
    const options = {
        type: "erc721",
        receiver: "0xA474cE48300D91334339fb5aDeF99A1B11B1cfe6",
        contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        tokenId: 4350,
      };
      let transaction = await Moralis.transfer(options);
};
