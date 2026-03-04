const test = require("node:test");
const assert = require("node:assert/strict");
const { addMonthsAligned } = require("../main/financialService");

test("addMonthsAligned preserves preferred due day across short months", () => {
  const start = new Date(2026, 0, 31, 12, 0, 0, 0); // 31/01/2026
  const feb = addMonthsAligned(start, 1, 31);
  const mar = addMonthsAligned(start, 2, 31);

  assert.equal(feb.getFullYear(), 2026);
  assert.equal(feb.getMonth(), 1);
  assert.equal(feb.getDate(), 28);

  assert.equal(mar.getFullYear(), 2026);
  assert.equal(mar.getMonth(), 2);
  assert.equal(mar.getDate(), 31);
});

test("addMonthsAligned respects preferred day when month supports it", () => {
  const start = new Date(2026, 3, 15, 12, 0, 0, 0); // 15/04/2026
  const next = addMonthsAligned(start, 1, 15);
  assert.equal(next.getFullYear(), 2026);
  assert.equal(next.getMonth(), 4);
  assert.equal(next.getDate(), 15);
});
