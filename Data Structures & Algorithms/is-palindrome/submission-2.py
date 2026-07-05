class Solution:
    def isPalindrome(self, s: str) -> bool:
        string="".join(char for char in s if char.isalnum())
        i,j=0,len(string)-1
        while i<j:
            if string[i]!=string[j]:
                return False
            i=i+1
            j=j-1
        return True
