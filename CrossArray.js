const array0 = [3, 2, 1];
const array1 = [3, 4, 2, 5];


const intersects = function (nums1, nums2) {
    let result = [];

    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc
    }, {});
    for (let i = 0; i < nums2.length; i++) {
        const current = nums2[i];
        let count = map[current];
        if (count && count > 0) {
            result.push(current);
            map[current] -= 1;
        }
    }
    return result
}

console.log(intersects(array0, array1))
