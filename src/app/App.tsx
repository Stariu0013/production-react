import {Link} from "react-router-dom";
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selectable: true }, [theme])}>
            <div>
                <Link to="/">Main page</Link>
                <Link to="/about">About page</Link>
            </div>

            <button onClick={toggleTheme}>
                TOGGLE
            </button>

            <AppRouter />
        </div>
    );
};

export default App;