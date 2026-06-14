public class Solution {
    public bool hasDuplicate(int[] nums) {
        HashSet<int> lookup = new HashSet<int>();
        foreach(int num in nums){
            if(lookup.Contains(num)){
                return true;
        }
            lookup.Add(num);
        }
        return false;
        
    }
}