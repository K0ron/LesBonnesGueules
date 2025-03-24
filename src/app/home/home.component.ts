import { Component } from '@angular/core';
import { LeftBlockComponent } from "./ui/component/left-block/left-block.component";
import { RightBlockComponent } from "./ui/component/right-block/right-block.component";
import { MidBlockComponent } from "./ui/component/mid-block/mid-block.component";
import { BottomBlockComponent } from "./ui/component/bottom-block/bottom-block.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftBlockComponent, RightBlockComponent, MidBlockComponent, BottomBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
