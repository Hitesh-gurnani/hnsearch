import React, { useEffect, useState } from 'react'
import '../SearchedData/SearchData.css'
import { Grid } from 'semantic-ui-react'
import NavBar from '../Components/NavBar'
import SearchedList from './SearchedList'
function SearchedData({ globalVar }) {
    const [detailedList, setDetailedList] = useState([])
    useEffect(() => {
        async function getValue() {
            const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${globalVar}`);
            const data = await res.json();
            setDetailedList(data.hits)

        }
        getValue();
    }, [])
    return (
        <>
            <Grid style={{ paddingTop: '70px' }}>
                <Grid.Column>
                    {
                        detailedList.map(ele => (
                            <SearchedList style={{ display: 'flex' }} author={ele.author} id={ele.objectID} points={ele.points} title={ele.title} url={ele.url} />
                        ))
                    }
                    {/* {detailedList.map(ele => ele.author)} */}
                </Grid.Column>
            </Grid>
        </>
    )
}

export default SearchedData