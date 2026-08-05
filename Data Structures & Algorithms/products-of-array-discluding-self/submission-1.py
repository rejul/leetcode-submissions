class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result=[]
        for i in range(0,len(nums)):
            product=1
            for j in range(0,len(nums)):
                if nums[i]==nums[j]:
                    continue
                product*=nums[j]
            result.append(product)
        return result            

        