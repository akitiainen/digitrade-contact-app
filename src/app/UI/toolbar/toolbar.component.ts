import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarOptions} from './toolbar-options';
import {ToolbarService} from './toolbar.service';
import {ToolbarActions} from './toolbar-actions';

@Component({
  selector: 'dtca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private router: Router, private toolbar: ToolbarService) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });
  }

  onNavigateBack() {
  this.router.navigate(['/contacts']);
  }

  onMenuClick() {
    this.MenuClick.emit();
  }
}
