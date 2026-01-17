const { getVotes } = require("./storage");

function getResult(proposalId) {
  const votes = getVotes(proposalId);
  let yes = 0;
  let no = 0;

  votes.forEach(v => {
    if (v.choice === "YES") yes++;
    if (v.choice === "NO") no++;
  });

  return {
    proposalId: proposalId,
    yes: yes,
    no: no,
    winner: yes > no ? "YES" : "NO"
  };
}

module.exports = {
  getResult
};
