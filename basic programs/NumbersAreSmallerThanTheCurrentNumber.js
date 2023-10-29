var smallerNumbersThanCurrent = function (nums) {
  temp = [];
  nums.forEach((elem) => {
    temp.push(nums.filter((ele) => elem > ele).length);
  });
  return temp;
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));