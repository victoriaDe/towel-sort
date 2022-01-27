module.exports =
    function towelSort(matrix) {
        if (!matrix || matrix.length === 0) return [];
        let newArr = [];
        matrix.forEach((arr, index) => {
            index % 2 === 0 ? newArr.push(arr) : newArr.push(arr.sort((a, b) => {
                return b - a
            }));
        })
        return newArr.flat(1) || [];
    }
