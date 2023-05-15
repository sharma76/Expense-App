import axios from "axios";
const url='https://expensetrackerapp-dc514-default-rtdb.firebaseio.com/';
export async function storeExpense(expenseData)
{
let response=await axios.post(url+'expense.json',expenseData);  
const id=response.data.name;
return id;
}
export async function fetchExpense()
{
const expense=[];
const response= await axios.get(url+'expense.json');
for(key in response.data)
{
const expenseObj={
    id:key,
    amount:response.data[key].amount,
    date:new Date(response.data[key].date),
    description:response.data[key].description,
    
}
expense.push(expenseObj);
}
return expense;
}
export async function updateExpense(id,expenseData)
{
axios.put(url+`expense/${id}.json`,expenseData);
}
export async function deleteExpense(id)
{
axios.delete(url+`expense/${id}.json`);
}