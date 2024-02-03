function Item({ id, name, img }) {
    return (
        <div className="bg-accent_color w-52 h-52">
            <h1>{name}</h1>
            <img src={img} />
        </div>
    );
}

export default Item;
