import menu from "./data.js";
import Item from "./Item.jsx";

function Menu() {
    const coffeeSpecialitiesEl = menu.coffeeSpecialties.map((item) => (
        <Item key={item.id} name={item.name} img={item.img} />
    ));

    const teaSelectionsEl = menu.teaSelections.map((item) => (
        <Item key={item.id} name={item.name} img={item.img} />
    ));

    const sweetTreatsEl = menu.sweetTreats.map((item) => (
        <Item key={item.id} name={item.name} img={item.img} />
    ));
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-center gap-10 my-20">
            <h1 className="text-4xl font-bold">Our Menu</h1>
            <h2 className="text-2xl font-bold">Coffee Specialities</h2>
            <div className="flex flex-row flex-wrap gap-20">
                {coffeeSpecialitiesEl}
            </div>
            <h2 className="text-2xl font-bold">Teas Specialities</h2>
            <div className="flex flex-row flex-wrap gap-20">
                {teaSelectionsEl}
            </div>
            <h2 className="text-2xl font-bold">Sweet Treats</h2>
            <div className="flex flex-row flex-wrap gap-20">
                {sweetTreatsEl}
            </div>
        </div>
    );
}

export default Menu;
