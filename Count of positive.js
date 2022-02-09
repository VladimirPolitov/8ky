function countPositivesSumNegatives (A) {
    if (!A || !A.length) return []

    let pos = A.filter(x=>x>0),
        neg = A.filter(x=>x<=0)

    return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}