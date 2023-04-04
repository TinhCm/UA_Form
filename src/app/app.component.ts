import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products = [
    {
      id: 1,
      date: '4/4/2023',
      chuyen: 1,
      maHang: 'KHKHK1',
      mau: 'red',
      loaiChuyenDoi: 1,
      startTime: '4/4/2023',
      one: 9,
      two: 9,
      three: 9,
      four: 9,
      fire: 9,
    },
  ];
  ngOnInit(): void {}
  title = 'UA_Form';
}
