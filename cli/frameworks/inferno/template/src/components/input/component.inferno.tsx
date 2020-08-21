import { InfernoComponent } from '../component.inferno';

export class InputComponent extends InfernoComponent {
  public render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.control.id}>{this.props.control.label}</label>
        <input
          className="form-control"
          id={this.props.control.id}
          name={this.props.control.name}
          value={this.props.control.value}
          onInput={(event: InputEvent) => {
            this.props.control.value = event.target.value;
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
