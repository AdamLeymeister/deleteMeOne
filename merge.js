const fs = require("fs");

function loadPayload(filePath) {
  let text;
  try {
    text = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    if (err && err.code === "ENOENT") {
      throw new Error(`Input file not found: ${filePath}`);
    }
    throw err;
  }

  let payload;
  try {
    payload = JSON.parse(text);
  } catch (err) {
    throw new Error(`${filePath} is not valid JSON: ${err.message}`);
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    !Array.isArray(payload.results)
  ) {
    throw new Error(`${filePath} must be an object with a results array`);
  }
  return payload;
}

const payload_a = loadPayload("results_A_S.json");
const payload_b = loadPayload("results_T-Z.json");

const files = new Map();

[payload_a, payload_b].forEach((payload) => {
  payload.results.forEach((result) => {
    if (!files.has(result.file)) files.set(result.file, []);
    const hits = files.get(result.file);
    result.hits.forEach((hit) => {
      const already = hits.some(
        (existing) =>
          existing.category === hit.category &&
          existing.word === hit.word &&
          existing.line === hit.line &&
          existing.content === hit.content &&
          existing.isReviewed === hit.isReviewed,
      );
      if (!already) hits.push(hit);
    });
  });
});

const merged = {
  top: payload_a.top,
  bottom: payload_a.bottom,
  results: [...files].map(([file, hits]) => ({ file, hits })),
};

fs.writeFileSync("merged.json", `${JSON.stringify(merged, null, 4)}\n`, "utf8");
console.log(`Wrote ${merged.results.length} files to merged.json`);
