const rate = 1.1
const initial = 0
const monthly = 250 * 1.2
const years = 18
let end = initial

for (let year = 1; year <= years; year++) {
  end = end * rate + monthly * 12
  console.log(year, end.toFixed(0))
}

// bun run index.ts
