const { saveVote } = require("./storage");
const { isValidMember } = require("./member");

function castVote(proposalId, member, choice) {
  if (!isValidMember(member)) {
    return false;
  }

  const vote = {
    proposalId: proposalId,
    member: member,
    choice: choice
  };

  saveVote(vote);
  return true;
}

module.exports = {
  castVote
};
