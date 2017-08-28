import { Component, OnInit } from '@angular/core';
// ES6의 Component, metadata
@Component({
  selector: 'app-todos', // css 선택자처럼 사용 가능, 현재는 엘리먼트 이름이 app-todos인 DOM 요소를 선택
  templateUrl: './todos.component.html', // 뷰에 대한 정의 템플릿 HTML
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newText = '';
  todos: {
    done: boolean,
    text: string
  }[]; // 따로 클래스를 만들지 않고 TS에서 오브젝트 타입을 바로 선언

  constructor() {
    this.todos = [
      { done: false, text: '운동하기' },
      { done: true, text: '공부하기' },
    ];
  }

  ngOnInit() {
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  addTodo(newText: string) {
    this.todos.push({
      done: false,
      text: newText
    });
    this.newText = '';
  }

}
