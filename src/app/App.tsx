import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selectable: true }, [theme])}>
            <Navbar />

            <AppRouter />
        </div>
    );
};

export default App;