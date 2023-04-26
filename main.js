let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function getMax(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[sorted.length - 1]
}

function getMin(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[0]
}

class Process{
  static toJson(arg){
    return JSON.stringify(arg);
  }
  static fromJson(arg){
    return JSON.parse(arg);
  }
}

function func1 (arr, cb){
  cb(Process.toJson(arr));
}

function printer(jsonString){
  console.log(Process.fromJson(jsonString));
}

func1(dataArr, printer);

function doublePrinter(jsonString){
  console.log(Process.fromJson(jsonString).map(e => 2*e));
}

func1(dataArr, doublePrinter);

function evenPrinter(jsonString){
  console.log(Process.fromJson(jsonString).filter(e => e % 2 === 0));
}

func1(dataArr, evenPrinter);

function func2(arr, cb){
  setTimeout(()=>{
    cb(Process.toJson(arr))
  }, 2000)
}

func2(dataArr, printer);