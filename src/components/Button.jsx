function Button(props) {
    return (  
        <a href={`${props.url}`}>
            <button class="liquid relative px-8 py-4 text-base font-semibold text-primary border-2 border-[var(--color-primary)] rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out [background:linear-gradient(var(--color-primary))_no-repeat_calc(200%_-_var(--p,0%))_100%/200%_var(--p,0.2em)] [transition:0.3s_var(--t,0s),background-position_0.3s_calc(0.3s_-_var(--t,0s))]">
                {props.action}
            </button>
        </a>
    );
}

export default Button;