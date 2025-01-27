function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  // 2到n-1的每個整數能整除n
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  // 否則n是質數
  return true;
}