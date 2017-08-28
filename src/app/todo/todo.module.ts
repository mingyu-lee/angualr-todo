import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [], // 서비스를 제공할 때 설정
  declarations: [TodosComponent, TodoComponent], // Todo 모듈에서 사용하는 컴포넌트 선언, 일반적으로 템플릿에서 사용할 컴포넌트 선언
  exports: [TodosComponent] // 외부에서 사용할 수 있게 exports 옵션에 추가
})
export class TodoModule { }
