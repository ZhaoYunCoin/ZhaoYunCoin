const ZhaoYunCoin = artifacts.require('ZhaoYunCoin')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ZhaoYunCoin)
}
