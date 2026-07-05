class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      var en="";
      for(let i of strs){
        let n = i.length;
        en+="#"+n+i;
      

      }
      return en
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let arr=[]
      let j=0
      while(j<str.length){
        if(str[j]==='#'){
          j+=1
        }
        let leng=Number(str[j]);
        j+=1;
        let s =str.slice(j,j+leng);
        arr.push(s)
        j+=leng



      }
      return arr
    }
}
