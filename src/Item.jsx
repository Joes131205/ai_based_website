function Item({ id, name, img }) {
    console.log(img);
    return (
        <div className="bg-accent_color w-52 h-52 flex flex-col items-center justify-center text-center gap-1 rounded-md">
            <h1 className="text-md font-bold">{name}</h1>
            <img src={img} className="w-36 h-36 rounded-3xl" />
        </div>
    );
}

export default Item;
