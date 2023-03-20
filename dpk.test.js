const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return a trivial partition key if no event is provided", () => {
    const event = null;
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("0");
  });

  it("should use the provided partition key if available", () => {
    const event = { partitionKey: "my-partition-key" };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("my-partition-key");
  });

  it("should hash the event data to create a partition key", () => {
    const event = { data: { message: "hello world" } };
    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(expected);
  });

  it("should hash the partition key if it exceeds the max length", () => {
    const longKey = "x".repeat(300);
    const expected = crypto
      .createHash("sha3-512")
      .update(longKey)
      .digest("hex");
    const event = { partitionKey: longKey };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(expected);
  });
});
