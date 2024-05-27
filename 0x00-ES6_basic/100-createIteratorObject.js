export default function createIteratorObject(report) {
  const results = [];
  for (const idx of Object.values(report.allEmployees)) {
    results.push(...idx);
  }
  return results;
}
