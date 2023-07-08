/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryList = [];
  let totalList = [];
  transactions.forEach((element) => {
    let category = element.category;
    // console.log(category);
    let spends = element.price;
    // console.log(spends);
    if (!categoryList.includes(category)) {
      categoryList.push(category);
      totalList.push(0);
    }
    let catIndex = categoryList.indexOf(category);
    // console.log(`cat index is ${catIndex}`);
    totalList[catIndex] += spends;
    // console.log(totalList);
  });
  let ans = categoryList.map((element) => {
    return {
      category: element,
      totalSpent: totalList[categoryList.indexOf(element)],
    };
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
