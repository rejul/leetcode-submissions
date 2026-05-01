class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let lookup=new Set();
        for(let num of nums){
            if(lookup.has(num)){
                return true
            }
            lookup.add(num);
        }return false
    }
}
