import { 
    COLORS, 
    COLOR_MODE_KEY, 
    INITIAL_COLOR_MODE_CSS_PROP 
} from "../../constants";

export const ThemeContext = React.createContext();

export default function ThemeProvider({children}){
    let [colorMode, rawSetColorMode] = React.useState(undefined);

    React.useEffect(
        () => {
            const root = window.document.documentElement;

            const initialColorMode = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP);
            rawSetColorMode(initialColorMode);
        },
        []
    )

    const contextValue = React.useMemo(() => {
        function setColorMode(newValue){
            const root = window.document.documentElement;
            
            localStorage.setItem(COLOR_MODE_KEY, newValue);

            Object.entries(COLORS).forEach(([name, colorByTheme]) => {
                const cssVarName = `--color-${name}`;
                root.style.setProperty(cssVarName, colorByTheme[newValue]);
            })

            rawSetColorMode(newValue);
        }

        return {
            colorMode, 
            setColorMode
        }
    }, [colorMode, rawSetColorMode])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}