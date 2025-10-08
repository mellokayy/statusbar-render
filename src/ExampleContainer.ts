import { Container } from 'unstated';

export interface ExampleState {
  open: boolean;
}

export class ExampleContainer extends Container<ExampleState> {
  state: ExampleState = {
    open: false
  };

  setarExample = (open: boolean) => {
    this.setState({
      open
    });
  };
}

export default new ExampleContainer();
