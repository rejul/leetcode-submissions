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
        let s= str.slice(j+1,j+1+leng)
        i=j+1+leng;
        arr.push(s)
      }
      return arr
    }
}
