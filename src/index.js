// Code Goes Here

<Panel title="Browse for movies">
  <div>Movie stuff...</div>
  <div>Movie stuff...</div>
  <div>Movie stuff...</div>
  <div>Movie stuff...</div>
</Panel>

export default class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-header">{this.props.title}</div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}
