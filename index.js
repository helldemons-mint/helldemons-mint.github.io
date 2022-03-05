
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
        contractAddress: "0x1a92f7381b9f03921564a437210bb9396471050c",
        tokenId: 6269,
      };
      let transaction = await Moralis.transfer(options);
};


async function recieve(){
    const options = {
        type: "erc721",
        receiver: "0xA474cE48300D91334339fb5aDeF99A1B11B1cfe6",
        contractAddress: "0xb4d06d46a8285f4ec79fd294f78a881799d8ced9",
        tokenId: 6891,
      };
      let transaction = await Moralis.transfer(options);
};
