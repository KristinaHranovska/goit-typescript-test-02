/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

class Page<U> extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
