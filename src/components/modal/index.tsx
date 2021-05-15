import './style.scss';

interface IProps {
    title: string,
    disabled: boolean,
    loading: boolean
}

function Button(Props: IProps) {
    return (
        <button disabled={Props.disabled}>
            {Props.loading ? "Loading..." : Props.title}
        </button>
    );
}

export default Button;
