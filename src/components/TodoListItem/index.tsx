import './style.scss';

interface IProps {
    title: string,
    loading: boolean,
    onClick: any,
    styles?: any
}

function Button({title, loading, onClick, ...rest}: IProps) {
    return (
        <div className="button"
             onClick={onClick}
             {...rest}>
            {loading ? "Loading..." : title}
        </div>
    );
}

export default Button;
