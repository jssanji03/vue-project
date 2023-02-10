import { ref,computed } from 'vue';

export default function() {
   const count = ref(0);
    const double = () => count.value *= 2;
    const add = () => count.value+=1;
    return {
      count,
      double,
      add
    };
}
    
