class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        lookup=[]
        for num in nums:
            if num in lookup:
                return True
            lookup.append(num)
        return False
        
        