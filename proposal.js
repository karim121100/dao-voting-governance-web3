const { saveProposal } = require("./storage");

let counter = 1;

function createProposal(title) {
  const proposal = {
    id: counter++,
    title: title,
    time: new Date().toISOString()
  };

  saveProposal(proposal);
  return proposal.id;
}

module.exports = {
  createProposal
};
