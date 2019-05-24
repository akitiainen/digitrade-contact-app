import {ToolbarActions} from './toolbar-actions';

export class ToolbarOptions {
  backEnabled: boolean;
  title: string;
  actions: ToolbarActions[];

  constructor(backEnabled: boolean, title: string, actions: ToolbarActions[]) {
    this.backEnabled = backEnabled;
    this.title = title;
    this.actions = actions;
  }

}
