const todos = []

while(true) {
  let userInput = prompt("명령어를 입력해주세요:")
  if(userInput === "quit") break

  if(userInput === "add") {
    const todo = prompt("작업을 입력해주세요:")
    todos.push(todo)
    console.log(`${todo}가 목록에 추가되었습니다.`)
  }
  else if(userInput === "list") {
    console.log("**********")
    for(let i = 0; i < todos.length; i++) {
      console.log(`${i}. ${todos[i]}`)
    }
    console.log("**********")
  }
  else if(userInput === "delete") {
    const index = prompt("삭제할 인덱스를 입력해주세요:")
    todos.splice(index, 1);
    console.log("삭제되었습니다.")  
  }
}
console.log("프로그램이 종료되었습니다.")