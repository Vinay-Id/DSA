// Example 1:
// Input: date = "20th Oct 2052"
// Output: "2052-10-20"
// Example 2:
// Input: date = "6th Jun 1933"
// Output: "1933-06-06"
// Example 3:
// Input: date = "26th May 1960"
// Output: "1960-05-26"

var reformatDate = function (date) {
  let month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  let arr = date.split(" ").reverse();
  let tempArr = [];
  tempArr.push(arr[0]);
  tempArr.push(month[arr[1]]);
  let elem = arr[2].slice(0, -2);
  tempArr.push(elem.length < 2 ? 0 + elem : elem);
  return tempArr.join("-");
};
