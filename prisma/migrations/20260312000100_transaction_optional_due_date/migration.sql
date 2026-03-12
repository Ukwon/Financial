ALTER TABLE "Transaction" ADD COLUMN "settlementDueDate" DATETIME;

UPDATE "Transaction"
SET "settlementDueDate" = "dueDate"
WHERE "type" = 'EXPENSE' AND "settlementDueDate" IS NULL;

CREATE INDEX "Transaction_settlementDueDate_idx" ON "Transaction"("settlementDueDate");
