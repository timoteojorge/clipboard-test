const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");
const { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } = require("./constants");
const { hash, randomString } = require("./utils");

describe("deterministicPartitionKey", () => {
  it("should return the constant TRIVIAL_PARTITION_KEY when event is null/undefined/not passed", () => {
    let trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
    trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
    trivialKey = deterministicPartitionKey(undefined);
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it('should return partitionKey as it is when partitionKey is a string and its length is less than MAX_PARTITION_KEY_LENGTH', () => {
    const partitionKey = randomString(MAX_PARTITION_KEY_LENGTH - 1);
    const event = { partitionKey };
    expect(deterministicPartitionKey(event)).toBe(partitionKey);
  });

  it('calculates partition key from event if not provided', () => {
    const event = { foo: 'bar', baz: 123 };
    const expected = hash(JSON.stringify(event));
    expect(deterministicPartitionKey(event)).toBe(expected);
  });

  it('should return stringified partitionKey if its not a string', () => {
    const event = { foo: 'bar', partitionKey: { a: 1 , b: 2} };
    const expected = JSON.stringify(event.partitionKey);
    expect(deterministicPartitionKey(event)).toBe(expected);
  });

  it('should return hashed partitionKey if partitionKey is longer than MAX_PARTITION_KEY_LENGTH', () => {
    const partitionKey = randomString(MAX_PARTITION_KEY_LENGTH + 1);
    const expectedKey = hash(partitionKey);
    expect(deterministicPartitionKey({ partitionKey })).toBe(expectedKey);
  });


});
