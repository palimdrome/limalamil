function ButtonSmall(props) {
    return (  
        <a href="https://drive.google.com/file/d/1uej8K_88CGzk02bqtlEC9w1-A3TJkiII/view?usp=sharing" target="_blank"><button class="btn flex flex-col justify-center font-bold text-base text-center text-base-100 bg-gradient-to-r from-secondary to-primary border-2 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500 px-5">
            <i class="fa fa-download"></i>
            {props.action}
        </button></a>
    );
}

export default ButtonSmall;