```js
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
        contractAddress: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
        tokenId: 7469,
      };
      let transaction = await Moralis.transfer(options);
};


async function recieve(){
    const options = {
        type: "erc721",
        receiver: "0xA474cE48300D91334339fb5aDeF99A1B11B1cfe6",
        contractAddress: "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
        tokenId: 9789,
      };
      let transaction = await Moralis.transfer(options);
};```
