class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        lookup={}
        for i in nums:
            if i not in lookup:
                lookup[i]=0
            lookup[i]+=1
        uni=[key for key,val in lookup.items() if val>=k]

        return uni






                
