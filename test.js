// your-react-app.js
const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
        </div>
    );
};

const ExampleComponent = () => {
    return (
        <div>
            <p>This is an example component.</p>
        </div>
    );
};

ReactDOM.render(
    <div>
        <App />
        <ExampleComponent />
    </div>,
    document.getElementById('root')
);
