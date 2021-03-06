Using TypeScript with React
React provides various types which we can use to describe our components properly.

Function Components

```js
interface Props {...}

const Paragraph: React.FunctionComponent<Props> = ({children}) =>
  <p>{children}</p>

// FC is an alias for the FunctionComponent type
const Paragraph2: React.FC<Props> = ({children}) =>
  <p>{children}</p>
```

Class Components

```js
interface Props {...}
interface State {...}

class SomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = ...
  }
}

// OR

class SomeComponent extends React.PureComponent<Props, State> {}
```

Any React Component
When you'd like to assign both function and class components to a variable or a prop you can use the React.ComponentType interface to describe the variable.

```js
interface Props {}

let anyComponent: React.ComponentType<Props> = //...some component with props matching the Props interface
```

Both React.FunctionComponent and React.Component already describe the built-in props like children.

DOM Events

```js
const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {...}

const Button = () => <button onClick={clickHandler}>I am a button</button>

const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {...}

const Form = () => <form onSubmit={submitHandler}>...</form>
```

If React doesn't have an event type for some event at the moment (e.g. the event is still in experimental mode), we can use the React.SyntheticEvent type to describe it like this:

```js
const inputHandler = (e: React.SyntheticEvent) => {
  e.target...
}

const Form = () => (
  <form onSubmit={inputHandler}>
    <input type="text" onInput={inputHandler} />
  </form>
)
```

Other common event interfaces:

- ChangeEvent
- FocusEvent
- FormEvent
- FocusEvent
- KeyboardEvent
- MouseEvent
- TouchEvent
- DragEvent
- PointerEvent
- AnimationEvent
- TransitionEvent
- ClipboardEvent
- SyntheticEvent

Creating a HOC

```js
/* 1. Defining the HOC */

interface CurrentUserHOCProps {
  currentUser: {
    name: string;
  };
}

const withCurrentUser = <ChildCompProps extends CurrentUserHOCProps>(
  ChildComp: React.ComponentType<ChildCompProps>
) => {
  const CurrentUserHOC = (
    props: Omit<ChildCompProps, keyof CurrentUserHOCProps>
  ) => {
    // Get the current user somewhere.
    const currentUser = { name: 'John' };

    return (
      <ChildComp {...(props as ChildCompProps)} currentUser={currentUser} />
    );
  };

  return CurrentUserHOC;
};

/* 2. Defining the child component which uses the props from the HOC */

interface GreetingProps extends CurrentUserHOCProps {
  color: 'yellow' | 'green';
}

const Greeting: React.FC<GreetingProps> = ({ color, currentUser }) => {
  return <div style={???{ color }}>{`Hello, ${currentUser.name}`}</div>;
};

const GreetingWithCurrentUser = withCurrentUser(Greeting);

/* 3. Rendering the wrapped child component */

const Header = () => {
  return (
    <header>
      SomeLogo
      <GreetingWithCurrentUser color="green" />
    </header>
  );
};
```
