#! /usr/ bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let TodoList: string[] = []
let conditions = true;

console.log(chalk.magenta("\n \t Welcome to code with Nabila -Todo list Application\n"));

// 
 
let main = async () => {
      while(conditions){
            let option = await inquirer.prompt([
           {
               name: "choice",
               type: "list",
               message: "Select an option you want to do:",
               choices: ["Add Task","Delete Task", "Update Task","View ToDo List","Exit"]
           }

            ]);
            if(option.choice ===  "Add Task"){
                await addTask()
            }
            else if(option.choice === "Delete Task"){
               await deleteTask()
            }
            else if(option.choice === "Update Task"){
               await updateTask()
            }
            else if (option.choice === "View ToDo List"){
               await viewTask()
            }
            else if (option.choice === "Exit"){
               conditions = false;
            }
             
      }
}
// function to add new task in ToDo
let addTask = async () => {
   
      let newTask = await inquirer.prompt([
        {
          name: "task",
          type: "input",
          message: "Enter yuor new task :"
        }

      ])
      TodoList.push(newTask.task),
      console.log(`\n ${newTask.task} sucessfully add in ToDo list`)
    }

//  function to view all ToDo list

let viewTask = () => {
  console.log("\n your ToDo list \n")
  TodoList.forEach((task,index) =>{
  console.log(`${index} : ${task}`)

  } )

}
//    funcion to delete a task from the list

let deleteTask = async () => {
   await viewTask()
   let taskIndex = await inquirer.prompt([
  {
   name: "index",
   type: "number",
   message: "Enter the 'Index Num' of the task you want to delete",
  }

   ]);
   let deleteTask = TodoList.splice(taskIndex.index - 1, 1);
   console.log(`\n ${deleteTask} this task has been delete sucessfully in your ToDo list`)
}
 
// function to update a task
let updateTask= async () => {
  await viewTask()
  let updateTaskIndex = await inquirer.prompt([
  {
      name: "index",
      type: "number",
      message: "Enter the 'index no' you want to update"
  },

  {
    name: "newTask",
    type: "input",
    message: "Now Enter new task name",

  }

  ]);
  TodoList[updateTaskIndex.index - 1] = updateTaskIndex.newTask
  console.log(`\n Task at index no ${updateTaskIndex.index - 1} update sucessfully [for update list check option in ToDo list]`)
}

main()