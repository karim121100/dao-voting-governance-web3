function isValidMember(address) {
  return address && address.startsWith("0x");
}

module.exports = {
  isValidMember
};
