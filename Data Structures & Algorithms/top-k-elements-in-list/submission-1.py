class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        lookup={}
        for i in nums:
            if i not in lookup:
                lookup[i]=0
            lookup[i]+=1
        so=sorted(lookup.items(),key=lambda x:x[1],reverse=True)
        uni=[key for key,val in so[:k]]

        return uni






                
