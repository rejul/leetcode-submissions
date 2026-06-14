class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let lookup = new Map<string,number>();

        for(var c of s){
            lookup.set(c,(lookup.get(c)||0)+1);
       }
        for( c of t){
            lookup.set(c,(lookup.get(c)||0)-1)
       }
        for(let num of lookup.values()){
            if(num!=0){
                return false

            }
        }
        return true


        
    }

}
