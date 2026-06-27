class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      var en="";
      for(let i of strs){
        let n = i.length;
        en+=n+"#"+i;
      

      }
      return en
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let arr=[]
      let i=0;
      
      while(i<str.length){

        let  j=i;
        while(str[j]!='#'){
          j++
        }
        let leng=Number(str.slice(i,j));
        i=j+1
        j=i+leng
        let s= str.slice(i,j)
        arr.push(s)
        i=j;
      }
      return arr
    }
}
