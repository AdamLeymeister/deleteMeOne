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

const payload = loadPayload("merged.json");

const aToR = [];
const sToZ = [];

payload.results.forEach((result) => {
  const aHits = [];
  const sHits = [];
  result.hits.forEach((hit) => {
    const letter = String(hit.word || "")
      .charAt(0)
      .toLowerCase();
    if (letter >= "a" && letter <= "r") aHits.push(hit);
    else sHits.push(hit);
  });
  if (aHits.length) aToR.push({ file: result.file, hits: aHits });
  if (sHits.length) sToZ.push({ file: result.file, hits: sHits });
});

function writeSplit(fileName, results) {
  const output = {
    top: payload.top,
    bottom: payload.bottom,
    results,
  };
  fs.writeFileSync(fileName, `${JSON.stringify(output, null, 4)}\n`, "utf8");
  const hitCount = results.reduce((sum, result) => sum + result.hits.length, 0);
  console.log(
    `Wrote ${results.length} files and ${hitCount} hits to ${fileName}`,
  );
}

writeSplit("split_A_R.json", aToR);
writeSplit("split_S-Z.json", sToZ);
