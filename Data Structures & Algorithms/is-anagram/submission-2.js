class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const S= new Map();
        const T = new Map();
        if(s.length!=t.length){
            return false
        }
        for(let i=0; i<s.length;i++){
            S.set(s[i],1+ (S.get(s[i])||0))
            T.set(t[i],1+ (T.get(t[i])||0))
            
        }
        for (let [char, count] of S) {
            if (count !== T.get(char)) {
                return false;
            }
        } 
    return true 
    }
 }
