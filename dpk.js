const { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } = require("./constants");
const { hash } = require("./utils");

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    candidate = event.partitionKey ? event.partitionKey : hash(JSON.stringify(event));
  }

  if (!candidate) return TRIVIAL_PARTITION_KEY;

  if(typeof candidate !== "string") candidate = JSON.stringify(candidate);

  return candidate.length > MAX_PARTITION_KEY_LENGTH ? hash(candidate) : candidate;
};