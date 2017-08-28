import { Component, OnInit } from '@angular/core';
// ES6의 Component, metadata
@Component({
  selector: 'app-todos', // css 선택자처럼 사용 가능, 현재는 엘리먼트 이름이 app-todos인 DOM 요소를 선택
  templateUrl: './todos.component.html', // 뷰에 대한 정의 템플릿 HTML
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
