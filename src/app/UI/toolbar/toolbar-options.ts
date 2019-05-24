import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
  backEnabled: boolean;
  title: string;

  constructor(backEnabled: boolean, title: string) {
    this.backEnabled = backEnabled;
    this.title = title;
  }

}
