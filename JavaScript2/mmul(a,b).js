function mmul(a,b) 
{
  if(a[0].length !==b.length)
  {
    throw new Error("矩陣大小不符合相乘條件");
  }
  //空陣列儲存相乘後的矩陣
  const result=[];
  //雙重迴圈計算矩陣相乘
  for(let i=0; i < a.length;i++) 
  {
    result[i]=[];
    for (let j=0; j < b[0].length;j++)
    {
      let sum = 0;
      for (let k=0; k < b.length;k++) 
      {
        sum +=a[i][k]*b[k][j];
      }
      result[i][j]=sum;
    }
  }
  //回傳相乘後的矩陣
  return result;
}
//測試
const a=[[1,2],[1,2]];
const b=[[1,2],[1,2]];
console.log(mmul(a, b));//預期[[3,6],[3,6]]