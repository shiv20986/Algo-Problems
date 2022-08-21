// 1: land, 0: water
// # of islands in this region
const region = [
  [1, 0, 1, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 1, 1],
]
const region2 = [
  [1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
]

function islandsCount (regions) {
    const positions = regions
        .map((rows, row) => {
            return rows.map((num, col) => {
                return num ? [row, col] : null
            })
        })
        .flat()
        .filter(pos => pos)
    const pools = positions.map(pos => ([pos]))
    for (let i = 0; i < pools.length; i++) {
        let match = false
        for (let j = 1; j < pools.length; j++) {
            const poolA = pools[i], poolB = pools[j]
            const inSamePool = poolA.some(a => poolB.some(b => {
                return (
                    (a[0] === b[0] && Math.abs(a[1] - b[1]) === 1) ||
                    (a[1] === b[1] && Math.abs(a[0] - b[0]) === 1)
                )
            }))
            if (inSamePool) {
                pools[i] = poolA.concat(poolB)
                pools.splice(j, 1)
                match = true
                break;
            }
        }
        if (match) {
            i--
        }
    }
    return pools.length
}

islandsCount (region)
islandsCount (region2)