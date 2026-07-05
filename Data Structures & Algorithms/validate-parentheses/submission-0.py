class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        hashtable={")":"(","]":"[","}":"{"}

        for c in s:
            if c in hashtable:
                if stack and stack[-1]==hashtable[c]:
                    stack.pop()
                else:
                    return False
            else:
                 stack.append(c)

        return True if not stack else False

        