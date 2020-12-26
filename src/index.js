const list = [];

class Todo_list {
  constructor(item) { //constructor는 클래스 인스턴스를 생성하고 생성한 인스턴스를 초기화하는 역할을 합니다. 
    this.ulElement = item;
  }

  add(text) {
    if (text != "") {
      const addlist = {
        id: list.length,
        text,
      }
      list.push(addlist);
      text = "";
      this.disply();
    }
  }

  disply() {
    this.ulElement.innerText = "";

    //forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
    list.forEach((list) => {
      const { id, text } = list;
      const newListItem = document.createElement('li'); // 새로운 li 요소를 만듬
      newListItem.classList.add('listItem'); // listItem 클래스를 더해줌
      newListItem.setAttribute("id", id);
      newListItem.innerText = text; //사용자 입력 문자를 li사이에 넣음
      this.ulElement.appendChild(newListItem); // 리스트에 새로 만든 li를 추가 -> 요소추가하기

      newListItem.addEventListener("click", () => {
        const select = newListItem.getAttribute("id");
        this.header(select);
      })
    })
  }
  header(select) {
    const headerEvent = document.querySelector("#header");
    headerEvent.innerHTML = list[select].text;

  }
}

const listSection = document.querySelector("#showlist")

let Todolist = new Todo_list(listSection);

additem.addEventListener('click', () => {
  let text = prompt("목록");
  Todolist.add(text);
});