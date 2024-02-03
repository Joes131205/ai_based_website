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
        <div className="w-screen h-screen flex flex-col align-middle justify-center text-center gap-10">
            <h1>Our Menu</h1>
            <div className="flex flex-row flex-wrap gap-20">
                {coffeeSpecialitiesEl}
            </div>
            <div className="flex flex-row flex-wrap gap-20">
                {teaSelectionsEl}
            </div>
            <div className="flex flex-row flex-wrap gap-20">
                {sweetTreatsEl}
            </div>
        </div>
    );
}

export default Menu;
