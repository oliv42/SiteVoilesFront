import { useEffect, useState } from "react";
import { requestParagliderList } from "../../requests/paraglider";
import Card from "../card/Card";

function MainGrid() {
    const fetchParaliderList = async function () {
        const paragliderList = await requestParagliderList();
        return paragliderList;
    };

    const [paragliderList, setParagliderList] = useState([]);

    useEffect(() => {
        fetchParaliderList().then((paraliderList) => {
            const shuffledParaliderList = paraliderList.data.sort((a, b) => 0.5 - Math.random());
            setParagliderList(shuffledParaliderList);
        });
    }, []);

    return (
        <div className="flex flex-wrap gap-5">
            {paragliderList.map((paraglider, key) => {
                const { id, name, type, release_year, maker_name } = paraglider;
                return (
                    <Card
                        key={key}
                        id={id}
                        name={name}
                        type={type}
                        releaseYear={release_year}
                        maker_name={maker_name}
                    />
                );
            })}
        </div>
    );
}

export default MainGrid;
