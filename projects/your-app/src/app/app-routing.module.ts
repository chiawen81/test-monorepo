import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'index', redirectTo: '', pathMatch: 'full' }, // 將 /index 重導向至根路徑
  {
    path: 'test',
    loadComponent: () => import('./test/test.component').then(m => m.TestComponent) // 加載 standalone component
  }, // 根路徑的對應組件
  // 其他路由定義
  { path: '**', redirectTo: '' } // 捕捉所有未知路徑並重導向到根路徑
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
