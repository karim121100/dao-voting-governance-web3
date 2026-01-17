const { createProposal } = require("./proposal");
const { castVote } = require("./vote");
const { getResult } = require("./result");
const { logInfo } = require("./logger");

function startApp() {
  logInfo("Starting DAO Voting System");

  const proposalId = createProposal("Add new token to DAO");
  castVote(proposalId, "0xMember1", "YES");
  castVote(proposalId, "0xMember2", "NO");
  castVote(proposalId, "0xMember3", "YES");

  const result = getResult(proposalId);
  logInfo("Final Result:");
  console.log(result);
}

startApp();
