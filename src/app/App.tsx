import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

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

            <Suspense fallback={<div>🌀 Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;