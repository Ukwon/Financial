const test = require("node:test");
const assert = require("node:assert/strict");
const { parseAppDate } = require("../main/dateUtils");

test("parseAppDate parses YYYY-MM-DD as a valid date without timezone drift", () => {
  const parsed = parseAppDate("2026-03-15");
  assert.ok(parsed instanceof Date);
  assert.equal(parsed.getFullYear(), 2026);
  assert.equal(parsed.getMonth(), 2);
  assert.equal(parsed.getDate(), 15);
});

test("parseAppDate accepts Date and ISO datetime values", () => {
  const base = new Date(2026, 0, 10, 8, 0, 0, 0);
  const fromDate = parseAppDate(base);
  const fromIso = parseAppDate("2026-01-10T08:00:00.000Z");
  assert.ok(fromDate instanceof Date);
  assert.ok(fromIso instanceof Date);
});

test("parseAppDate returns null for empty/invalid values", () => {
  assert.equal(parseAppDate(""), null);
  assert.equal(parseAppDate(null), null);
  assert.equal(parseAppDate("invalid-date"), null);
});
