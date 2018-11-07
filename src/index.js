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


<MovieBrowser>
  <Movie title="Mad Max: Fury Road" />
  <Movie title="Harry Potter & The Goblet Of Fire" />
</MovieBrowser>

export default class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = 'Mad Max: Fury Road';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isPlaying: child.props.title === currentPlayingTitle
      });
    });

    return (
      <div className="movie-browser">
        {childrenWithExtraProp}
      </div>
    );
  }
}
