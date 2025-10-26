function Button(props) {
    const accentBorderColor = `border-2 border-[var(--color-accent)] rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out`;

    const accentLiquidFillColor = `[background:linear-gradient(var(--color-accent))_no-repeat_calc(200%_-_var(--p,0%))_100%/200%_var(--p,0.2em)]`;

    const primaryBorderColor = `border-2 border-[var(--color-primary)] rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out`;

    const primaryLiquidFillColor = `[background:linear-gradient(var(--color-primary))_no-repeat_calc(200%_-_var(--p,0%))_100%/200%_var(--p,0.2em)]`;

    const accentTextColor = `text-accent`;
    const primaryTextColor = `text-primary`;

    const borderColor = props.isAccent ? accentBorderColor : primaryBorderColor;
    const liquidFillColor = props.isAccent ? accentLiquidFillColor : primaryLiquidFillColor;
    const textColor = props.isAccent ? accentTextColor : primaryTextColor;

    return (  
        <a className="w-full" href={`${props.url}`} target={props.target}>
            <button className={`liquid w-full relative px-8 py-4 text-base font-semibold ${textColor} ${borderColor} ${liquidFillColor} [transition:0.3s_var(--t,0s),background-position_0.3s_calc(0.3s_-_var(--t,0s))]`}
            >{props.action}</button>
        </a>
    );
}

export default Button;