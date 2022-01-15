export default {
  methods: {
    maskText(number){
      
      let reversed = number.toString().split('').reverse().join('')
      
      let g = 1
      for(let i = 0; i < reversed.length; i++){
        if(g == 4){
          reversed = reversed.substring(0, i) + "," + reversed.substring(i, reversed.length);
          g = 0
        }
        g++
      }

      return reversed.toString().split('').reverse().join('')
    }
  }
}