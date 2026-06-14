class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let lookup = new Set<number>();
        let num:number;
        for (num of nums){
            if (lookup.has(num)){
                return true
            }
            lookup.add(num)

        }
        return false
    
        
        
    }
}
