const orderSet = new Set([
  "Burger",
  "Pizza",
  "Fries",
  "Stack",
  "Burger",
  "Pizza",
]);
console.log(orderSet);
console.log(new Set("Hamza"));
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Cake"));
orderSet.add("Biscuits");
console.log(orderSet);
orderSet.delete("Pizza");
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ["waiter", "Chef", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(new Set(["waiter", "Chef", "Manager", "Chef", "Waiter"]).size);
