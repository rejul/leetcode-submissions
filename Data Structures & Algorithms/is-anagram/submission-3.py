class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!=len(t):
            return False
        lookup=[0]*26

        for ch in s:
            lookup[ord(ch)-ord('a')]+=1

        for ch in t:
            lookup[ord(ch)-ord('a')]-=1

        for num in lookup:
            if num!=0:
                return False
        return True