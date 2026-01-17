const proposals = [];
const votes = [];

function saveProposal(proposal) {
  proposals.push(proposal);
}

function saveVote(vote) {
  votes.push(vote);
}

function getVotes(proposalId) {
  return votes.filter(v => v.proposalId === proposalId);
}

module.exports = {
  saveProposal,
  saveVote,
  getVotes
};
