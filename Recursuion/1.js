// int sum =0;
// int n=5;  (you can take any number manually)
// for(int i=0;i<10;i=i+2)
// {
// if(i==n)
// {
// break;
// }
// sum =sum+i;
// }
// System.out.println(sum);

function foundN(i, sum, n) {
  if (i >= 9) {
    return sum;
  }
  if (i === n) {
    return sum;
  } else {
    sum = sum + i;
    return foundN(i + 2, sum, n);
  }
}

console.log(foundN(0, 0, 5));
