class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        main_list=defaultdict(list)
        for s in strs:
            sortedS="".join(sorted(s))
            main_list[sortedS].append(s)
        return list(main_list.values())

            
            
        
        