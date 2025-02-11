import {Link, Route, Routes} from "react-router-dom";
import './assets/styles/index.scss';
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
                    <Route path="/" element={<MainPageLazy/>}/>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;