import { useEffect, useState } from 'react';
import { requestParaglidingList } from '../../requests/paragliding'
import Card from '../card/Card';

function MainGrid() {


    const fetchParalidingList = async function () {
        const paraglidingList = await requestParaglidingList();
        return paraglidingList;
    }

    const [paraglidingList, setParaglidingList] = useState([]);

    useEffect(() => {
        fetchParalidingList().then(res => setParaglidingList(res.data))
    }, [])
    

    return (
        <div>
            <h2>Main grild</h2>
            {paraglidingList.map((paragliding, key) => {
                const  {id, name, type, release_year} = paragliding;
               return <Card key={key} id={id} name={name} type={type} releaseYear={release_year}/>
            })}
        </div>
    );
}

export default MainGrid;
