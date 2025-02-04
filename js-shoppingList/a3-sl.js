let shoppingList = ["牛奶", "鸡蛋", "面包"];
// 1. 在shoppingList的末尾添加两个元素
shoppingList.push("苹果", "香蕉");
console.log("push后的shopping list: ", ...shoppingList); // ["牛奶", "鸡蛋", "面包", "苹果", "香蕉"]


// 2. 从shoppingList的末尾删除一个元素
shoppingList.pop();
console.log("pop后的shopping list: ", ...shoppingList); // ["牛奶", "鸡蛋", "面包", "苹果"]


// 3. shoppingList是否满了的funciton
const isFull = shoppingList => { shoppingList.length >= 5 ? console.log("你的购车满了") : console.log("你的购车没满") };
console.log("shopping list是否满了: ");
isFull(shoppingList);


// 4. 遍历shoppingList，输出每个元素
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});


// 5. 创建一个商品对象并检测商品是否在shoppingList中
let itemA = {
    name: "牛奶",
    price: 2.5,
    quantity: 1
};
const isItemInList = (item, list) => { list.includes(item.name) ? console.log("商品在购物车中") : console.log("商品不在购物车中") };
isItemInList(itemA, shoppingList);



