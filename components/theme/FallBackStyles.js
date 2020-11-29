import { COLORS } from "../../constants"; 

const FallbackStyles = () => {
    // Create a string holding each CSS variable:
    /*
      `--color-text: black;
      --color-background: white;`
    */
  
    const cssVariableString = Object.entries(COLORS).reduce(
      (acc, [name, colorByTheme]) => {
        return `${acc}\n--color-${name}: ${colorByTheme.light};`;
      },
      ''
    );
  
    const wrappedInSelector = `html { ${cssVariableString} }`;
  
    return <style>{wrappedInSelector}</style>;
};

export default FallbackStyles;
