const GreatOperationButton = ({clickHandler}) => {
    return(<div id="operators">
        <button onClick={clickHandler} id="/" class="operator">/</button>
        <button onClick={clickHandler} id="+" class="operator">+</button>
        <button onClick={clickHandler} id="-" class="operator">-</button>
        <button onClick={clickHandler} id="*" class="operator">*</button>
    </div>)
}

export default GreatOperationButton;