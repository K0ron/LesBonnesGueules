import { Component } from '@angular/core';
import { LeftBlockComponent } from "./component/left-block/left-block.component";
import { RightBlockComponent } from "./component/right-block/right-block.component";
import { MidBlockComponent } from "./component/mid-block/mid-block.component";
import { BottomBlockComponent } from "./component/bottom-block/bottom-block.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftBlockComponent, RightBlockComponent, MidBlockComponent, BottomBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
