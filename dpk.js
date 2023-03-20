const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event?.partitionKey) {
    candidate = `${event?.partitionKey}`;
  } else {
    candidate = event
      ? crypto
          .createHash("sha3-512")
          .update(JSON.stringify(event))
          .digest("hex")
      : TRIVIAL_PARTITION_KEY;
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(candidate).digest("hex")
    : candidate;
};
