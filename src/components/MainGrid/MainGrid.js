import { useEffect, useState } from "react";
import { requestParagliderList } from "../../requests/paraglider";
import { Card } from "../card/Card";

export function MainGrid() {
    const fetchParagliderList = async function () {
        const paragliderList = await requestParagliderList();
        return paragliderList;
    };

    const [paragliderList, setParagliderList] = useState([]);

    useEffect(() => {
        fetchParagliderList().then((paragliderList) => {
            const shuffledParagliderList = paragliderList.data.sort((a, b) => 0.5 - Math.random());
            setParagliderList(shuffledParagliderList);
        });
    }, []);

    return (
        <div className="flex flex-wrap gap-5">
            {paragliderList.map((paraglider, key) => {
                const { id, name, type, release_year, maker, photos } = paraglider;
                return (
                    <Card
                        key={key}
                        id={id}
                        name={name}
                        type={type}
                        releaseYear={release_year}
                        maker={maker}
                        photos={photos[0]}
                    />
                );
            })}
        </div>
    );
}
