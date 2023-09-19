// functionlinearSearch(arr, val);
// {
//   var index = 0;
//   var found = false;
//   while (index < arr.length && !found) {
//     if (arr[index] == val) {
//       found = true;
//     }
//     index++;
//   }
//   if (!found) {
//     return -1;
//   } else {
//     return1;
//   }
// }
function binarySearch(arr, val, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == val) {
    return true;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, end);
  }
}
arr = [3, 1, 6, 4, 5, 9, 2];
// arr = heapSort(arr);
console.log(binarySearch(arr, 10, 0, arr.length));
