function evenOccurrence(nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = !hash[nums[i]];
    }

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            return nums[i];
        }
    }

    return null;
}
