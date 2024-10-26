import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>test works!!!!!</p>`,
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent { }
